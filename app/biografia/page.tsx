import Tabs from '@/components/Tabs';
import Image from 'next/image';

export default function Biografia() {
  // Fotos reais do autor
  const photos = [
    { id: 1, filename: 'vanilson1.jpg.jpg', alt: 'Vanilson Reis', caption: 'Vanilson Reis - Poeta e Escritor' },
    { id: 2, filename: 'vanilson2.jpg.jpg', alt: 'Vanilson Reis', caption: 'Momentos da trajetória literária' },
    { id: 3, filename: 'vanilson3.jpg.jpg', alt: 'Vanilson Reis', caption: 'Apresentação e palestras' },
    { id: 4, filename: 'vanilson4.jpg.jpg', alt: 'Vanilson Reis', caption: 'Processo criativo' },
    { id: 5, filename: 'vanilson5.jpg.jpg', alt: 'Vanilson Reis', caption: 'Encontros literários' },
    { id: 6, filename: 'vanilson6.jpg.jpg', alt: 'Vanilson Reis', caption: 'Vanilson Reis' },
  ];

  const tabs = [
    {
      id: 'sobre',
      label: 'SOBRE',
      content: (
        <div className="max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-2xl font-serif leading-relaxed text-neutral-800 mb-8">
              Vanilson Alves dos Reis, membro Fundador da Academia Planaltinense de Letras é poeta, palestrante e educador. Sua obra transita entre o 
              silêncio e a palavra, buscando nas entrelinhas do cotidiano a poesia que 
              transforma.
            </p>

            <div className="space-y-6 text-neutral-700 leading-relaxed">
              <p>
                Nascido em 15 de janeiro de 1962, na cidade de Formosa-GO, Vanilson cresceu cercado pela riqueza cultural 
                e pela musicalidade que permeiam cada esquina da cidade. Desde cedo, as 
                palavras se apresentaram como refúgio e ferramenta de expressão, moldando 
                seu olhar sobre o mundo.
              </p>

              <p>
                Licenciado em Letras pela FECLISF e Pós-Graduado em Língua e Literatura pela Universidade Estadual de Goiás (UEG), é professor de Língua Portuguesa da Secretaria de Estado de Educação do DF.
                Dedicou-se inicialmente à docência, levando a literatura para salas de aula em escolas públicas. Foi 
                nesse contexto que percebeu o poder transformador da palavra poética, 
                especialmente quando compartilhada oralmente.
              </p>

              <p>
                Poeta e escritor, Vanilson é autor do “Projeto Cultural Poesia na Escola”, por meio do qual leva o livro e a poesia à comunidade estudantil mais carente. Já são mais de 2600 livros distribuídos gratuitamente nas escolas de 1º e 2º graus desde o seu lançamento, em 1992.
              </p>

              <p>
                Como palestrante, Vanilson leva sua experiência para empresas, escolas e 
                eventos culturais, abordando temas como criatividade, comunicação autêntica 
                e o papel da arte na construção de uma sociedade mais humana. Suas 
                apresentações mesclam poesia, storytelling e reflexões sobre o processo 
                criativo.
              </p>

              <p>
                Atualmente, além de escrever e ministrar palestras, coordena oficinas de 
                escrita criativa e mantém o blog onde compartilha reflexões sobre literatura, 
                processo criativo e os desafios de viver da palavra em tempos digitais.
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-neutral-200">
              <h3 className="text-2xl font-serif mb-6">Formação</h3>
              <ul className="space-y-3 text-neutral-700">
                <li>
                  <strong>Licenciatura em Letras</strong>
                  <br />
                  <span className="text-neutral-600">FECLISF</span>
                </li>
                <li>
                  <strong>Pós-Graduado em Língua e Literatura</strong>
                  <br />
                  <span className="text-neutral-600">Universidade Estadual de Goiás (UEG)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'fotos',
      label: 'FOTOS',
      content: (
        <div>
          <p className="text-neutral-600 mb-8 max-w-2xl">
            Registros de apresentações, lançamentos e momentos do processo criativo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[4/3] bg-neutral-200 overflow-hidden"
              >
                {/* Foto real */}
                <Image
                  src={`/${photo.filename}`}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Legenda com overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Cabeçalho da página */}
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6">
          Biografia
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl">
          Conheça a trajetória de Vanilson Reis, poeta e palestrante.
        </p>
      </div>

      {/* Sistema de Abas */}
      <Tabs tabs={tabs} defaultTab="sobre" />
    </div>
  );
}
