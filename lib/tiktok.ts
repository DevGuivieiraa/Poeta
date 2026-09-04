import type { BlogPost } from './blog';

interface TikTokVideoItem {
  id: string;
  video_description?: string;
  cover_image_url: string;
  embed_link: string;
  create_time: number; // timestamp em segundos
  duration: number;
}

async function refreshAccessToken(): Promise<string | null> {
  try {
    const res = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_key: process.env.TIKTOK_CLIENT_KEY!,
        client_secret: process.env.TIKTOK_CLIENT_SECRET!,
        grant_type: 'refresh_token',
        refresh_token: process.env.TIKTOK_REFRESH_TOKEN!,
      }),
    });

    if (!res.ok) {
      console.error('Falha ao renovar token do TikTok:', await res.text());
      return null;
    }

    const data = await res.json();
    console.log('TikTok resposta da renovação de token:', JSON.stringify(data));
    console.log('TikTok open_id:', data.open_id); // Mostra qual conta está autenticada
    return data.access_token as string;
  } catch (error) {
    console.error('Erro ao renovar token do TikTok:', error);
    return null;
  }
}

function mapToBlogPost(item: TikTokVideoItem): BlogPost {
  const description = item.video_description ?? '';
  const firstLine = description.split('\n')[0] || 'Novo vídeo';
  const title = firstLine.length > 70 ? firstLine.slice(0, 70) + '...' : firstLine;

  console.log(`📹 Mapeando vídeo ${item.id}:`, {
    embed_link: item.embed_link,
    cover: item.cover_image_url.substring(0, 50) + '...',
  });

  return {
    id: `tiktok-${item.id}`,
    slug: `tiktok-${item.id}`,
    title,
    excerpt: description.length > 180 ? description.slice(0, 180) + '...' : description,
    content: `<p>${description}</p><p><a href="${item.embed_link}" target="_blank" rel="noopener noreferrer">Ver no TikTok</a></p>`,
    date: new Date(item.create_time * 1000).toISOString(),
    readTime: `${Math.ceil(item.duration / 60) || 1} min`,
    image: item.cover_image_url,
    category: 'TikTok',
  };
}

export async function fetchTikTokPosts(): Promise<BlogPost[]> {
  console.log('=== TIKTOK DEBUG ===');
  console.log('TikTok refresh token existe?', !!process.env.TIKTOK_REFRESH_TOKEN);
  console.log('TikTok client key:', process.env.TIKTOK_CLIENT_KEY?.substring(0, 8) + '...');
  
  if (!process.env.TIKTOK_REFRESH_TOKEN) {
    console.log('TikTok: variável de ambiente ausente, pulando busca.');
    return [];
  }

  const accessToken = await refreshAccessToken();
  console.log('TikTok access token obtido?', !!accessToken);
  if (!accessToken) return [];

  try {
    const requestBody = { max_count: 20 };
    console.log('TikTok requisição body:', JSON.stringify(requestBody));
    
    const res = await fetch(
      'https://open.tiktokapis.com/v2/video/list/?fields=id,video_description,cover_image_url,embed_link,create_time,duration',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        cache: 'no-store', // Sem cache - sempre busca dados frescos
      }
    );

    console.log('TikTok video.list status:', res.status);
    const data = await res.json();
    console.log('TikTok video.list resposta completa:', JSON.stringify(data));

    if (!res.ok) {
      console.error('Erro ao buscar vídeos do TikTok:', res.status, JSON.stringify(data));
      return [];
    }

    const videos: TikTokVideoItem[] = data.data?.videos ?? [];
    console.log('TikTok quantidade de vídeos encontrados:', videos.length);
    
    if (videos.length === 0) {
      console.log('⚠️ ATENÇÃO: TikTok retornou 0 vídeos!');
      console.log('Possíveis causas:');
      console.log('1. Vídeo não foi publicado com a conta autorizada');
      console.log('2. Vídeo está privado');
      console.log('3. Vídeo é muito recente (aguarde alguns minutos)');
      console.log('4. A conta não tem vídeos públicos ainda');
    } else {
      console.log('📹 Vídeos encontrados (IDs):', videos.map(v => v.id).join(', '));
      console.log('📅 Datas de criação:', videos.map(v => new Date(v.create_time * 1000).toLocaleString('pt-BR')).join(' | '));
    }
    
    console.log('===================');
    return videos.map(mapToBlogPost);
  } catch (error) {
    console.error('Falha ao conectar com a API do TikTok:', error);
    return [];
  }
}