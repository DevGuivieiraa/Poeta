import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-6xl font-serif font-light mb-6">404</h1>
      <h2 className="text-3xl font-serif mb-6">Post não encontrado</h2>
      <p className="text-neutral-600 mb-8">
        O artigo que você está procurando não existe ou foi movido.
      </p>
      <Link
        href="/blog"
        className="inline-block px-8 py-3 bg-black text-white hover:bg-neutral-800 transition-colors"
      >
        Voltar para Cantinho da Poesia
      </Link>
    </div>
  );
}
