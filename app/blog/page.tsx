import { getAllPosts, formatDate } from '@/lib/blog';
import Image from 'next/image';

// Força revalidação em cada requisição (dados sempre atualizados)
export const revalidate = 0;

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6">
          Cantinho da Poesia
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl">
          Reflexões sobre poesia, processo criativo e a arte da palavra.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="block">
            <div className="space-y-4">
              {/* Imagem quadrada */}
              <div className="aspect-square bg-neutral-200 overflow-hidden relative">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400 text-sm">
                    Imagem do post
                  </div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-neutral-500">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>

                <h2 className="text-xl font-serif leading-tight line-clamp-3">
                  {post.title}
                </h2>
              </div>
            </div>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-neutral-500">Nenhum post encontrado.</p>
        </div>
      )}
    </div>
  );
}