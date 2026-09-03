import type { BlogPost } from './blog';

interface InstagramMediaItem {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

interface InstagramResponse {
  data: InstagramMediaItem[];
}

const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60);
}

function estimateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min`;
}

function mapToBlogPost(item: InstagramMediaItem): BlogPost {
  const caption = item.caption ?? '';
  
  // Extrai a primeira linha não vazia como título
  const lines = caption.split('\n').filter(line => line.trim());
  const firstLine = lines[0] || '';
  
  // Se a primeira linha for muito longa, corta e adiciona reticências
  const title = firstLine.length > 70 ? firstLine.slice(0, 70) + '...' : firstLine;
  
  // Cria o excerpt a partir do caption completo
  const excerpt = caption.length > 180 ? caption.slice(0, 180) + '...' : caption;

  return {
    id: item.id,
    slug: `${slugify(firstLine) || 'post'}-${item.id.slice(-6)}`,
    title: title || 'Post do Instagram', // Fallback se não houver título
    excerpt,
    content: caption
      .split('\n')
      .filter(Boolean)
      .map((line) => `<p>${line}</p>`)
      .join(''),
    date: item.timestamp,
    readTime: estimateReadTime(caption),
    image: item.media_type === 'VIDEO' ? item.thumbnail_url : item.media_url,
    category: 'Instagram',
  };
}

export async function fetchInstagramPosts(): Promise<BlogPost[]> {
  if (!INSTAGRAM_USER_ID || !INSTAGRAM_ACCESS_TOKEN) {
    console.warn('Variáveis de ambiente do Instagram não configuradas.');
    return [];
  }

  const url = new URL(`https://graph.instagram.com/v21.0/${INSTAGRAM_USER_ID}/media`);
  url.searchParams.set('fields', 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp');
  url.searchParams.set('access_token', INSTAGRAM_ACCESS_TOKEN);

  try {
    const res = await fetch(url.toString(), {
      cache: 'no-store', // Sem cache - sempre busca dados frescos
    });

    if (!res.ok) {
      console.error('Erro ao buscar posts do Instagram:', res.status, await res.text());
      return [];
    }

    const data: InstagramResponse = await res.json();
    return data.data.map(mapToBlogPost);
  } catch (error) {
    console.error('Falha ao conectar com a API do Instagram:', error);
    return [];
  }
}