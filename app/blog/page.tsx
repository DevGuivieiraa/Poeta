'use client';

import { formatDate } from '@/lib/blog';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image?: string;
  category: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        // Adiciona timestamp para evitar cache do browser
        const timestamp = new Date().getTime();
        const response = await fetch(`/api/posts?t=${timestamp}`, {
          cache: 'no-store',
        });
        if (!response.ok) {
          throw new Error('Erro ao carregar posts');
        }
        const allPosts = await response.json();
        console.log('Posts carregados:', allPosts.length);
        console.log('Posts TikTok:', allPosts.filter((p: BlogPost) => p.category === 'TikTok').length);
        setPosts(allPosts);
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadPosts();
  }, []);
  
  // Separar posts por tipo
  const instagramPosts = posts.filter(post => post.category === 'Instagram');
  const tiktokPosts = posts.filter(post => post.category === 'TikTok');

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center py-12 sm:py-20">
          <p className="text-neutral-500 text-sm sm:text-base">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Cabeçalho principal */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-4 sm:mb-6">
          Cantinho da Poesia
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl">
          Reflexões sobre poesia, processo criativo e a arte da palavra.
        </p>
      </div>

      {/* Seção: Cantinho da Poesia (Instagram - Quadrado) */}
      {instagramPosts.length > 0 && (
        <section className="mb-16 sm:mb-20 md:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {instagramPosts.map((post) => (
              <article key={post.id} className="block">
                <div className="space-y-3 sm:space-y-4">
                  {/* Imagem quadrada */}
                  <div className="aspect-square bg-neutral-200 overflow-hidden relative">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title || 'Post do Instagram'}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400 text-xs sm:text-sm">
                        Imagem do post
                      </div>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-3 text-xs text-neutral-500">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>

                    {post.title && (
                      <h2 className="text-lg sm:text-xl font-serif leading-tight line-clamp-3">
                        {post.title}
                      </h2>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Seção: Poesias em Vídeo (TikTok - Vertical) */}
      {tiktokPosts.length > 0 && (
        <section>
          {/* Cabeçalho da seção de vídeos */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-2 sm:mb-3">
              Poesias em Vídeo
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Vídeos publicados no TikTok
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {tiktokPosts.map((post) => {
              // Extrai o link do TikTok do conteúdo
              const linkMatch = post.content.match(/href="([^"]+)"/);
              const videoUrl = linkMatch ? linkMatch[1] : '';
              
              // Extrai o ID do vídeo da URL do TikTok
              // Suporta tanto player/v1 quanto formato padrão video/
              const videoIdMatch = videoUrl.match(/(?:video\/|player\/v1\/|embed\/v2\/)(\d+)/);
              const videoId = videoIdMatch ? videoIdMatch[1] : '';
              
              // Tenta usar o embed_link original se existir, senão usa o formato embed/v2
              let embedUrl = '';
              if (videoUrl.includes('player/v1/') || videoUrl.includes('embed')) {
                // Se já é uma URL de player/embed, usa ela diretamente
                embedUrl = videoUrl.split('?')[0] + '?autoplay=0&muted=0';
              } else if (videoId) {
                // Senão, cria uma URL de embed
                embedUrl = `https://www.tiktok.com/embed/v2/${videoId}?lang=pt-BR&autoplay=0&muted=0`;
              }
              
              console.log('TikTok Video Debug:', { videoUrl, videoId, embedUrl });

              return (
                <button
                  key={post.id}
                  onClick={() => {
                    console.log('Clicou no vídeo, embedUrl:', embedUrl);
                    if (embedUrl) {
                      setSelectedVideo(embedUrl);
                    } else {
                      console.error('Embed URL está vazio');
                    }
                  }}
                  className="group block cursor-pointer text-left w-full"
                  disabled={!embedUrl}
                >
                  <div className="space-y-3">
                    {/* Card de vídeo vertical - proporção oficial do TikTok */}
                    <div className="aspect-[9/19.5] bg-neutral-200 overflow-hidden relative rounded-lg">
                      {post.image ? (
                        <>
                          <Image
                            src={post.image}
                            alt={post.title || 'Vídeo do TikTok'}
                            fill
                            className="object-contain bg-black transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          
                          {/* Overlay com ícone de play */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg 
                                className="w-8 h-8 text-black ml-1" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>

                          {/* Gradiente e informações na parte inferior */}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12">
                            <div className="space-y-1">
                              <time className="text-xs text-white/80" dateTime={post.date}>
                                {formatDate(post.date)}
                              </time>
                              {post.title && (
                                <h3 className="text-sm font-serif text-white leading-tight line-clamp-2">
                                  {post.title}
                                </h3>
                              )}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400 text-xs sm:text-sm">
                          Vídeo não disponível
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Modal do TikTok */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors z-10"
            aria-label="Fechar vídeo"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-black rounded-lg overflow-hidden shadow-2xl"
          >
            {/* Player do TikTok embutido */}
            <div className="relative" style={{ paddingBottom: '177.78%' }}>
              <iframe
                src={selectedVideo}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                title="Vídeo do TikTok"
              />
            </div>
          </div>
        </div>
      )}

      {/* Mensagem quando não há posts */}
      {posts.length === 0 && (
        <div className="text-center py-12 sm:py-20">
          <p className="text-neutral-500 text-sm sm:text-base">Nenhum post encontrado.</p>
        </div>
      )}
    </div>
  );
}
