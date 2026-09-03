import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Livros em destaque
  const featuredBooks = [
    {
      id: 1,
      title: 'Vozes de Flores',
      year: '2023',
      slug: 'vozes-de-flores',
      tema: 'Conto',
    },
    {
      id: 2,
      title: 'A meninada também faz! 2ª edição',
      year: '2025',
      slug: 'a-meninada-tambem-faz-2',
      tema: 'Revista',
    },
  ];

  return (
    <div>
      {/* Seção Hero - Tela cheia */}
      <section className="min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-80px)] flex items-center justify-center bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Foto do autor */}
            <div className="order-2 md:order-1">
              <div className="aspect-[3/4] bg-neutral-200 relative overflow-hidden max-w-md mx-auto md:max-w-none">
                <Image
                  src="/vanilson-autor.jpg.jpg"
                  alt="Vanilson Reis - Poeta e Palestrante"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Frase de efeito */}
            <div className="order-1 md:order-2 space-y-6 sm:space-y-8 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
                A palavra que
                <br />
                <span className="italic">transforma</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 leading-relaxed">
                Poeta, palestrante e contador de histórias que atravessam o silêncio.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
                <Link
                  href="/biografia"
                  className="px-6 sm:px-8 py-3 bg-black text-white hover:bg-neutral-800 transition-colors text-center text-sm sm:text-base"
                >
                  Conheça minha história
                </Link>
                <Link
                  href="/contato"
                  className="px-6 sm:px-8 py-3 border border-black hover:bg-neutral-50 transition-colors text-center text-sm sm:text-base"
                >
                  Entre em contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Livros em Destaque */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-2 sm:mb-3">
                Livros
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base">Obras publicadas</p>
            </div>
            <Link
              href="/livros"
              className="text-xs sm:text-sm tracking-wider hover:text-neutral-600 transition-colors flex items-center gap-2"
            >
              VER TODOS
              <span>→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {featuredBooks.map((book) => (
              <Link
                key={book.id}
                href="/livros"
                className="group block border border-neutral-200 hover:border-black hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-4 sm:gap-6 p-4 sm:p-6">
                  {/* Capa do livro */}
                  <div className="aspect-[2/3] bg-neutral-100 relative overflow-hidden">
                    <Image
                      src={`/${book.slug}.jpg.png.png`}
                      alt={`Capa do livro ${book.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 140px"
                    />
                  </div>
                  
                  {/* Informações do livro */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-1 sm:mb-2 group-hover:text-neutral-600 transition-colors leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 italic mb-1 sm:mb-2">{book.tema}</p>
                    <p className="text-xs sm:text-sm text-neutral-500">{book.year}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
