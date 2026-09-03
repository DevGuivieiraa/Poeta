import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/blog';

// Gerar os parâmetros estáticos para todas as páginas de posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Gerar metadata dinâmico para SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  return {
    title: `${post.title} | Vanilson Reis`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  // Se o post não existir, mostrar página 404
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* Link de volta */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors mb-12"
      >
        <span>←</span>
        Voltar para Cantinho da Poesia
      </Link>

      {/* Cabeçalho do post */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6 text-sm text-neutral-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.readTime} de leitura</span>
          <span>•</span>
          <span className="text-neutral-700">{post.category}</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 leading-tight">
          {post.title}
        </h1>

        <p className="text-xl text-neutral-600 leading-relaxed">
          {post.excerpt}
        </p>
      </header>

      {/* Imagem destacada */}
      {post.image && (
        <div className="mb-12 aspect-[16/9] bg-neutral-200 overflow-hidden">
          <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400">
            Imagem destacada
          </div>
        </div>
      )}

      {/* Conteúdo do post */}
      <div
        className="prose prose-lg max-w-none
          prose-headings:font-serif prose-headings:font-light
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6
          prose-blockquote:border-l-2 prose-blockquote:border-black prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-600
          prose-a:text-black prose-a:underline prose-a:decoration-1 prose-a:underline-offset-2 hover:prose-a:text-neutral-600
          prose-strong:text-black prose-strong:font-medium
          prose-ul:my-6 prose-li:text-neutral-700
        "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Footer do post */}
      <footer className="mt-16 pt-12 border-t border-neutral-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-neutral-500 mb-2">Compartilhe este artigo</p>
            <div className="flex gap-4">
              <button className="text-sm text-neutral-600 hover:text-black transition-colors">
                Twitter
              </button>
              <button className="text-sm text-neutral-600 hover:text-black transition-colors">
                Facebook
              </button>
              <button className="text-sm text-neutral-600 hover:text-black transition-colors">
                LinkedIn
              </button>
            </div>
          </div>

          <Link
            href="/blog"
            className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm tracking-wider"
          >
            VER TODOS OS ARTIGOS
          </Link>
        </div>
      </footer>

      {/* Posts relacionados (opcional - implementar depois) */}
      <section className="mt-20 pt-12 border-t border-neutral-200">
        <h2 className="text-2xl font-serif mb-8">Continue lendo</h2>
        <p className="text-neutral-500">Posts relacionados aparecerão aqui...</p>
      </section>
    </article>
  );
}
