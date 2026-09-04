import { getAllPosts, formatDate } from '@/lib/blog';
import Image from 'next/image';

// Força revalidação em cada requisição (dados sempre atualizados)
export const revalidate = 0;

export default async function Blog() {
  const posts = await getAllPosts();
  
  // Separar posts por tipo
  const instagramPosts = posts.filter(post => post.category === 'Instagram');
  const tiktokPosts = posts.filter(post => post.category === 'TikTok');

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
              const videoUrl = linkMatch ? linkMatch[1] : '#';

              return (
                <a
                  key={post.id}
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block cursor-pointer"
                >
                  <div className="space-y-3">
                    {/* Card de vídeo vertical */}
                    <div className="aspect-[9/16] bg-neutral-200 overflow-hidden relative">
                      {post.image ? (
                        <>
                          <Image
                            src={post.image}
                            alt={post.title || 'Vídeo do TikTok'}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                </a>
              );
            })}
          </div>
        </section>
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
