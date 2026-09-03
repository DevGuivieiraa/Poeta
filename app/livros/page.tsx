import Image from 'next/image';

export default function Livros() {
  const livros = [
    { id: 1, titulo: 'Algemas Pesadas', tema: 'Poesia', ano: '1984', slug: 'algemas-pesadas', ext: '.jpg.png' },
    { id: 2, titulo: 'Menino Chorão', tema: 'Poesia', ano: '1985', slug: 'menino-chorao', ext: '.jpg.png' },
    { id: 3, titulo: 'Estrada', tema: 'Poesia', ano: '1987', slug: 'estrada', ext: '.jpg.png' },
    { id: 4, titulo: 'Capitão Destino', tema: 'Poesia', ano: '1990', slug: 'capitao-destino', ext: '.jpg.png' },
    { id: 5, titulo: 'Viola de Lágrima', tema: 'Poesia', ano: '1991', slug: 'viola-de-lagrima', ext: '.jpg.png' },
    { id: 6, titulo: 'O Sol Nasceu pra Todos', tema: 'Poesia', ano: '1992', slug: 'o-sol-nasceu-pra-todos', ext: '.jpg.png' },
    { id: 7, titulo: 'Cárcere do Amor', tema: 'Poesia', ano: '1993', slug: 'carcere-do-amor', ext: '.jpg.png' },
    { id: 8, titulo: 'Pinheiro de Deus', tema: 'Poesia', ano: '1994', slug: 'pinheiro-de-deus', ext: '.jpg.png' },
    { id: 9, titulo: 'Pinheiro de Deus 2ª edição', tema: 'Poesia', ano: '1995', slug: 'pinheiro-de-deus-2', ext: '.jpg.png' },
    { id: 10, titulo: 'Avepoema', tema: 'Poesia', ano: '1996', slug: 'avepoema', ext: '.jpg.png' },
    { id: 11, titulo: 'Reis e Valetes', tema: 'Conto', ano: '1999', slug: 'reis-e-valetes', ext: '.jpg.png' },
    { id: 12, titulo: 'Santos Vagabundos', tema: 'Conto', ano: '2001', slug: 'santos-vagabundos', ext: '.jpg.png' },
    { id: 13, titulo: 'MM', tema: 'Poesia', ano: '2005', slug: 'mm', ext: '.jpg.png' },
    { id: 14, titulo: 'W3! Uma Miss Brasília Esquecida...', tema: 'Poesia', ano: '2009', slug: 'w3-uma-miss-brasilia-esquecida', ext: '.jpg.png' },
    { id: 15, titulo: 'Fercal Escrevendo sua Região', tema: 'Revista', ano: '2013', slug: 'fercal-escrevendo-sua-regiao', ext: '.jpg.png.png' },
    { id: 16, titulo: 'Fercal Escrevendo sua Região 2ª edição', tema: 'Poesias e Crônicas', ano: '2014', slug: 'fercal-escrevendo-sua-regiao-2', ext: '.jpg.png.png' },
    { id: 17, titulo: 'Amoras da Carne', tema: 'Crônicas', ano: '2014', slug: 'amoras-da-carne', ext: '.jpg.png.png' },
    { id: 18, titulo: 'O Diário de Fred', tema: 'Um diário', ano: '2018', slug: 'o-diario-de-fred', ext: '.jpg.png.png' },
    { id: 19, titulo: 'A meninada também faz!', tema: 'Revista', ano: '2019', slug: 'a-meninada-tambem-faz', ext: '.jpg.png.png' },
    { id: 20, titulo: 'Vozes de Flores', tema: 'Conto', ano: '2023', slug: 'vozes-de-flores', ext: '.jpg.png.png' },
    { id: 21, titulo: 'A meninada também faz! 2ª edição', tema: 'Revista', ano: '2025', slug: 'a-meninada-tambem-faz-2', ext: '.jpg.png.png' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Cabeçalho da página */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-4 sm:mb-6">
          Livros
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl">
          Obras literárias de Vanilson Reis ao longo de mais de quatro décadas dedicadas à poesia e à escrita.
        </p>
      </div>

      {/* Grid de livros - 5 por linha */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {livros.map((livro) => (
          <div
            key={livro.id}
            className="group border border-neutral-200 hover:border-black hover:shadow-lg transition-all duration-300"
          >
            {/* Capa do livro */}
            <div className="aspect-[2/3] bg-neutral-100 relative overflow-hidden">
              <Image
                src={`/${livro.slug}${livro.ext}`}
                alt={`Capa do livro ${livro.titulo}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>
            
            {/* Informações do livro */}
            <div className="p-3 sm:p-4">
              <h3 className="text-sm sm:text-base font-serif mb-1 group-hover:text-neutral-600 transition-colors leading-tight line-clamp-2">
                {livro.titulo}
              </h3>
              <p className="text-xs text-neutral-500 italic mb-2">{livro.tema}</p>
              <p className="text-xs text-neutral-500">{livro.ano}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Informações adicionais */}
      <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-neutral-200">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-serif font-light mb-4 sm:mb-6">
            Uma trajetória literária
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            Desde 1984, Vanilson Reis tem compartilhado sua visão poética através de obras que 
            atravessam gerações. Com 21 livros publicados, sua escrita reflete décadas de 
            dedicação à palavra e ao ofício de poeta.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            Suas obras exploram temas diversos — do intimismo lírico às questões sociais, 
            da memória regional às reflexões universais sobre a condição humana.
          </p>
          
          {/* Aviso sobre obras esgotadas */}
          <div className="bg-neutral-50 border border-neutral-200 p-4 sm:p-6 mb-4 sm:mb-6">
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              <strong>Importante:</strong> Todas as obras apresentadas encontram-se atualmente esgotadas.
            </p>
          </div>

          <p className="text-neutral-600 text-xs sm:text-sm">
            Para mais informações sobre as obras, entre em contato através da 
            página de <a href="/contato" className="underline hover:text-black">contato</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
