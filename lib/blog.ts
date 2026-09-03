// Tipos para os posts do blog
export interface BlogPost {
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

// Mock de posts do blog
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'poesia-como-forma-de-resistencia',
    title: 'A poesia como forma de resistência',
    excerpt: 'Reflexões sobre o papel transformador da palavra poética em tempos de incerteza e como a literatura pode ser um instrumento de mudança social.',
    content: `
      <p>Em tempos de tanta fragmentação e ruído, a poesia surge como um ato de resistência. Não a resistência combativa e agressiva, mas aquela que se faz no silêncio, na escolha cuidadosa de cada palavra, na pausa que nos obriga a pensar.</p>

      <p>Quando escrevo, não busco apenas a beleza estética das palavras — embora ela seja importante. Busco criar pontes, construir diálogos, provocar reflexões que talvez não acontecessem de outra forma. A poesia tem esse poder único: ela nos tira da pressa, nos obriga a parar.</p>

      <h2>O papel social da palavra</h2>

      <p>Durante minha trajetória como educador, percebi que muitos jovens chegavam à literatura com a ideia de que ela era algo distante, elitista, desconectado de suas realidades. E isso me incomodava profundamente. Como a poesia poderia ser ferramenta de transformação se nem sequer chegava a quem mais precisava dela?</p>

      <p>Foi então que comecei a levar a poesia para as ruas, para as escolas públicas, para espaços onde ela normalmente não circulava. E descobri que, quando apresentada de forma acessível e honesta, a palavra poética ressoa em qualquer pessoa, independente de seu contexto social ou formação acadêmica.</p>

      <h2>A palavra que não se rende</h2>

      <p>Resistir, no contexto poético, significa manter viva a capacidade de se emocionar, de questionar, de sonhar. Em um mundo que nos quer produtivos e utilitários o tempo todo, escrever um poema é um ato revolucionário. Ler um poema, mais ainda.</p>

      <p>A poesia nos lembra que existem coisas que não podem ser quantificadas, métricas que não capturam a essência da experiência humana. Ela nos devolve a nossa humanidade.</p>

      <blockquote>
        <p>"A poesia não muda o mundo, mas transforma as pessoas que mudam o mundo."</p>
      </blockquote>

      <p>E é nessa transformação silenciosa, uma pessoa de cada vez, que reside o verdadeiro poder da palavra. Não se trata de grandiosas declarações ou manifestos bombásticos, mas do toque sutil que faz alguém ver o mundo — e a si mesmo — de forma diferente.</p>

      <h2>O compromisso com a palavra</h2>

      <p>Por isso, continuo escrevendo. Por isso, continuo compartilhando. Porque acredito que cada poema plantado no mundo é uma semente de possibilidade. Nem todos germinarão, é verdade. Mas aqueles que o fizerem podem crescer de formas que jamais imaginamos.</p>

      <p>A resistência poética não está nos grandes gestos, mas na persistência cotidiana de escolher a palavra certa, de buscar a verdade na linguagem, de não nos rendermos à superficialidade que tanto nos cerca.</p>
    `,
    date: '2026-08-15',
    readTime: '8 min',
    category: 'Reflexões',
  },
  {
    id: '2',
    slug: 'ritmo-da-palavra-falada',
    title: 'O ritmo da palavra falada',
    excerpt: 'Como a oralidade influencia a construção dos versos e a conexão com o público. A diferença entre o poema escrito e o poema dito.',
    content: `
      <p>Existe uma diferença fundamental entre o poema que se lê em silêncio e aquele que se ouve. A palavra falada traz consigo elementos que a palavra escrita, por mais bem construída que seja, não consegue capturar: a cadência, o ritmo, as pausas, o timbre da voz.</p>

      <p>Quando comecei a apresentar meus poemas em público, percebi que precisava repensar completamente minha forma de escrever. Versos que funcionavam perfeitamente no papel soavam estranhos quando pronunciados. Palavras que tinham beleza visual perdiam força na oralização.</p>

      <h2>A música da linguagem</h2>

      <p>Todo poema tem uma música interna, um ritmo que pulsa por trás das palavras. Mas é na performance oral que essa música se revela por completo. O poeta que se apresenta ao vivo é também um músico, mesmo que não use nenhum instrumento além da própria voz.</p>

      <p>Aprendi a prestar atenção nas aliterações, nas assonâncias, no peso das sílabas tônicas. Comecei a escrever em voz alta, testando cada verso antes de considerá-lo pronto. E descobri que a língua portuguesa, com sua riqueza sonora, oferece possibilidades infinitas de musicalidade.</p>

      <h2>O silêncio como elemento rítmico</h2>

      <p>Mas não é só a palavra que importa — o silêncio também é parte fundamental do ritmo. As pausas entre os versos, a respiração do poeta, o momento de suspensão antes da última linha. Tudo isso contribui para a experiência total do poema.</p>

      <p>Nas minhas apresentações, trabalho muito as pausas. Às vezes, o silêncio de três segundos diz mais que três estrofes. É no silêncio que o público processa, reflete, conecta o que acabou de ouvir com suas próprias experiências.</p>

      <h2>A conexão com o público</h2>

      <p>A palavra falada cria uma intimidade que a palavra escrita não consegue replicar. Quando recito um poema, olhando nos olhos das pessoas, existe uma troca energética, uma cumplicidade. O poema deixa de ser só meu — ele se torna nosso, do poeta e de quem escuta.</p>

      <blockquote>
        <p>"O poema falado não é uma leitura dramatizada. É uma forma de estar presente com o público através da linguagem."</p>
      </blockquote>

      <p>Vi pessoas chorarem durante apresentações. Vi rostos se iluminarem ao reconhecerem suas próprias histórias nos versos. E entendi que a oralidade traz o poema de volta às suas origens, àquele tempo em que a literatura era transmitida de boca a ouvido, de geração em geração.</p>

      <h2>Escrevendo para a voz</h2>

      <p>Hoje, quando escrevo, já penso na oralidade. Como esse verso vai soar? Essa palavra vai travar a língua? Esse ritmo vai envolver o ouvinte? São perguntas que guiam meu processo criativo tanto quanto as questões estéticas e semânticas.</p>

      <p>E recomendo a todos que escrevem: leiam seus textos em voz alta. Gravem-se. Prestem atenção no ritmo, na respiração, na musicalidade. Porque a palavra falada tem uma magia própria, e aprender a dominá-la pode transformar completamente sua escrita.</p>
    `,
    date: '2026-08-02',
    readTime: '7 min',
    category: 'Processo Criativo',
  },
  {
    id: '3',
    slug: 'inspiracoes-do-cotidiano',
    title: 'Inspirações do cotidiano',
    excerpt: 'Onde encontro as sementes para meus textos: um olhar sobre o processo criativo e as pequenas belezas que nos cercam todos os dias.',
    content: `
      <p>Uma das perguntas que mais recebo é: "De onde vêm suas inspirações?" E minha resposta costuma decepcionar quem espera algo grandioso: do cotidiano. Das coisas simples. Do ordinário que, olhado com atenção, revela-se extraordinário.</p>

      <p>Não acredito naquele mito do poeta que só escreve em momentos de grande emoção ou inspiração divina. Para mim, a poesia está no trajeto do ônibus, na conversa da mesa ao lado no café, no jeito que a luz da tarde entra pela janela.</p>

      <h2>O olhar atento</h2>

      <p>O que diferencia o poeta não é ter experiências especiais, mas ter um olhar especial sobre experiências comuns. É ver poesia no gesto cansado do trabalhador no fim do expediente, na criança que inventa palavras, na senhora que conversa com as plantas na varanda.</p>

      <p>Mantenho sempre um caderno comigo — daqueles pequenos, que cabem no bolso. Nele, anoto frases soltas, palavras interessantes, observações rápidas. Muitos desses fragmentos nunca se tornarão poemas completos, mas servem como sementes. Sementes que, em algum momento, podem germinar.</p>

      <h2>A rotina criativa</h2>

      <p>Outra coisa que aprendi: não espero a inspiração chegar. Tenho uma rotina de escrita. Acordo cedo, antes que o dia comece a fazer suas exigências, e escrevo por pelo menos uma hora. Nem sempre sai algo bom. Na maioria das vezes, aliás, o que escrevo nessas manhãs vai direto para a gaveta.</p>

      <p>Mas é no exercício diário, na prática constante, que de repente surge algo verdadeiro. A inspiração existe, sim, mas ela parece visitar mais frequentemente quem está trabalhando.</p>

      <h2>Conversas como matéria-prima</h2>

      <p>Muitos dos meus poemas nasceram de conversas. Alguém conta uma história, menciona um detalhe, usa uma expressão única, e aquilo fica ecoando em mim. Às vezes por dias, às vezes por meses. Até que encontra sua forma em palavras.</p>

      <blockquote>
        <p>"O poeta é alguém que presta atenção. Que escuta não apenas o que é dito, mas o que pulsa por trás das palavras."</p>
      </blockquote>

      <p>Por isso, minha melhor ferramenta criativa não é o computador ou o caderno. É a disponibilidade para estar presente. Para realmente ver e ouvir o que acontece ao meu redor.</p>

      <h2>Transformando o comum em poético</h2>

      <p>Um poema que escrevi sobre uma fila de banco começou quando percebi os rostos das pessoas — cada uma com sua história, suas preocupações, seus sonhos. Ninguém ali era apenas "alguém esperando na fila". Eram universos inteiros compartilhando, por alguns minutos, o mesmo espaço.</p>

      <p>Essa é a magia do cotidiano como fonte de inspiração: ele nos lembra que não precisamos de grandes eventos para ter o que dizer. A vida, em sua versão mais simples e corriqueira, já é material suficiente para toda uma obra.</p>

      <h2>O caderno como companheiro</h2>

      <p>Voltando ao caderno: ele é meu companheiro constante há mais de dez anos. Tenho dezenas deles empilhados, todos preenchidos com rabiscos, desenhos, palavras soltas, pequenos poemas. Vez ou outra, revisito esses cadernos antigos e me surpreendo com o que encontro.</p>

      <p>Uma anotação de três anos atrás, que na época não fez muito sentido, de repente conversa perfeitamente com algo que estou vivendo hoje. E vira um poema. O cotidiano tem dessas coisas — ele trabalha em camadas, revelando significados em tempos diferentes.</p>
    `,
    date: '2026-07-20',
    readTime: '6 min',
    category: 'Processo Criativo',
  },
  {
    id: '4',
    slug: 'silencio-que-fala',
    title: 'O silêncio que fala',
    excerpt: 'Reflexões sobre o espaço em branco na poesia e na vida. Por que o não-dito às vezes comunica mais que as palavras.',
    content: `
      <p>Há um paradoxo no coração da poesia: muitas vezes, ela diz mais pelo que cala do que pelo que declara. O espaço em branco ao redor do verso, a pausa entre as estrofes, a palavra que quase foi escrita mas permaneceu apenas como possibilidade — tudo isso fala.</p>

      <p>Quando comecei a escrever, tinha a tendência de querer dizer tudo, explicar cada sentimento, preencher cada lacuna. Com o tempo, aprendi que o silêncio é parte fundamental da linguagem poética. Ele não é ausência de comunicação, mas uma forma de comunicação em si.</p>

      <h2>O poder do não-dito</h2>

      <p>Na página, o espaço em branco ao redor de um poema não é vazio — está carregado de significado. Ele dá respiro ao texto, convida o leitor a pausar, a refletir. É nesse espaço que acontece o diálogo silencioso entre poeta e leitor.</p>

      <p>Aprendi isso especialmente quando comecei a trabalhar com formas mais minimalistas. Um haicai, com seus três versos curtos, depende tanto do que está escrito quanto do oceano de silêncio que o cerca. É como se o poema fosse apenas a ponta de um iceberg, e todo o resto permanecesse submerso, presente mas não visível.</p>

      <h2>Pausas nas apresentações</h2>

      <p>Nas performances ao vivo, o silêncio se torna ainda mais palpável. Quando termino de recitar um verso e faço uma pausa de alguns segundos, posso sentir a atenção da plateia, o processamento acontecendo em tempo real. Esses momentos de suspensão são às vezes os mais poderosos de toda a apresentação.</p>

      <blockquote>
        <p>"O silêncio não interrompe a comunicação. Ele a aprofunda."</p>
      </blockquote>

      <p>Um dia, numa palestra, testei recitar um poema e simplesmente parar no penúltimo verso. Não disse a última linha. Deixei o poema em aberto, suspenso. O silêncio que se seguiu foi ensurdecedor. Depois, nas conversas, várias pessoas disseram que aquele final não-dito tinha sido a parte mais impactante.</p>

      <h2>O que escolhemos não dizer</h2>

      <p>Na vida, também aprendemos — ou deveríamos aprender — o valor do que decidimos não falar. Nem tudo precisa ser verbalizado. Algumas emoções são grandes demais para caberem em palavras. Alguns momentos são sagrados demais para serem narrados.</p>

      <p>Isso não significa reprimir ou esconder. Significa reconhecer que existem formas de comunicação que vão além da linguagem verbal. Um olhar, um gesto, uma presença silenciosa podem dizer "estou aqui" de forma mais profunda que qualquer discurso.</p>

      <h2>Editando o excesso</h2>

      <p>Meu processo de edição é, em grande parte, um processo de corte. Retiro palavras, versos inteiros às vezes. Não porque não sejam bons, mas porque o poema ficará mais forte sem eles. É preciso coragem para isso — coragem para confiar que menos pode ser mais.</p>

      <p>Cada palavra que permanece no poema final precisa justificar sua existência. Se posso comunicar a mesma coisa com menos palavras, por que usar mais? O silêncio que criei ao eliminar o desnecessário permite que o essencial ressoe com mais força.</p>

      <h2>Convidando o leitor</h2>

      <p>Quando deixo espaço — literalmente, na página, ou metaforicamente, no sentido do poema — estou convidando o leitor a participar. A completar com sua própria experiência, sua própria interpretação. O poema deixa de ser só meu e se torna também seu.</p>

      <p>E talvez seja essa a função mais importante do silêncio na poesia: criar espaço para que o leitor exista dentro do texto. Para que ele não seja apenas um receptor passivo, mas um co-criador de significado.</p>
    `,
    date: '2026-07-05',
    readTime: '7 min',
    category: 'Reflexões',
  },
  {
    id: '5',
    slug: 'palavra-em-tempos-digitais',
    title: 'A palavra em tempos digitais',
    excerpt: 'Como a era digital transforma nossa relação com a escrita e a leitura. Desafios e oportunidades para poetas no século XXI.',
    content: `
      <p>Vivemos numa era de paradoxos. Nunca se escreveu tanto quanto agora — mensagens, posts, comentários, tweets. E, ao mesmo tempo, nunca a palavra pareceu tão desgastada, tão esvaziada de significado. Como poeta, me pergunto constantemente: qual o lugar da poesia nesse cenário?</p>

      <p>A resposta não é simples, mas tenho pensado muito sobre isso. E acredito que, justamente por vivermos nesse excesso de palavras vazias, a palavra cuidada, trabalhada, poética, se torna ainda mais necessária.</p>

      <h2>A velocidade contra a profundidade</h2>

      <p>Um dos maiores desafios para a poesia hoje é a velocidade. Tudo é rápido, superficial, descartável. Um post tem vida útil de minutos. Um vídeo que não prende nos primeiros três segundos é ignorado. Nesse contexto, pedir que alguém pare para ler um poema, para refletir sobre ele, parece quase subversivo.</p>

      <p>Mas talvez seja exatamente isso que precisamos. Em meio à enxurrada de informação, a poesia oferece pausa. Ela não quer ser consumida rapidamente — ela quer ser saboreada, digerida, revisitada.</p>

      <h2>Novas plataformas, antigas questões</h2>

      <p>Por outro lado, a era digital trouxe oportunidades incríveis. Posso compartilhar um poema e ele alcançar pessoas do outro lado do mundo em segundos. Posso me conectar com outros poetas, formar comunidades, participar de discussões que antes seriam impossíveis.</p>

      <blockquote>
        <p>"A tecnologia não é inimiga da poesia. O uso que fazemos dela é que determina se ela nos aproxima ou nos afasta da palavra verdadeira."</p>
      </blockquote>

      <p>Mantenho este blog, tenho presença nas redes sociais, compartilho poemas em formato digital. Mas tento fazer isso de forma consciente, sem ceder completamente à lógica da viralização e do engajamento a qualquer custo.</p>

      <h2>O desafio da atenção</h2>

      <p>Nossos cérebros estão sendo treinados para a dispersão. Múltiplas abas abertas, notificações constantes, o scroll infinito. Como competir com isso? Como pedir que alguém dedique atenção sustentada a um texto?</p>

      <p>Não sei se tenho uma resposta definitiva, mas acredito que parte da solução está em não competir. A poesia não precisa ser "competitiva" no sentido comercial. Ela não precisa de milhões de leitores. Precisa de leitores verdadeiros — mesmo que sejam poucos.</p>

      <h2>Qualidade sobre quantidade</h2>

      <p>Aprendi a valorizar mais uma leitura profunda, que gera reflexão e conexão genuína, do que mil visualizações superficiais. É melhor tocar verdadeiramente uma pessoa do que ser vagamente notado por mil.</p>

      <p>Nas minhas redes sociais, tento cultivar esse tipo de interação. Respondo comentários, proponho reflexões, crio espaço para diálogo. Não quero apenas "seguidores" — quero leitores, interlocutores, pessoas dispostas a pensar junto.</p>

      <h2>O futuro do livro</h2>

      <p>Muita gente prevê o fim do livro físico. Eu não acredito nisso. Livros digitais têm seu valor e sua conveniência, mas o objeto livro — o peso nas mãos, o cheiro do papel, a experiência tátil de virar páginas — oferece algo que o digital não replica.</p>

      <p>Para a poesia especialmente, o formato físico importa. O design da página, o tipo de papel, a capa — tudo isso faz parte da experiência total do poema. Um livro de poesia não é apenas um veículo para o texto; é uma obra de arte em si.</p>

      <h2>Resistência poética digital</h2>

      <p>Então, como poeta no século XXI, minha estratégia é híbrida. Uso as ferramentas digitais para alcançar e conectar, mas não abro mão da profundidade e da qualidade. Publico online, mas também publico livros físicos. Compartilho nas redes, mas também faço leituras presenciais.</p>

      <p>Porque, no fim, não é sobre escolher entre o digital e o analógico, o novo e o tradicional. É sobre usar todas as ferramentas disponíveis para fazer aquilo que sempre foi a essência da poesia: comunicar verdades humanas, criar conexões, tocar almas.</p>
    `,
    date: '2026-06-18',
    readTime: '8 min',
    category: 'Reflexões',
  },
  {
    id: '6',
    slug: 'construindo-personagens-poeticos',
    title: 'Construindo personagens poéticos',
    excerpt: 'A técnica de criar vozes e personas na poesia. Como emprestar corpo e voz a experiências que não são necessariamente minhas.',
    content: `
      <p>Nem toda poesia precisa ser autobiográfica. Embora muito da minha escrita venha de experiências pessoais, descobri há alguns anos o prazer e o desafio de criar personagens — vozes que não são exatamente a minha, mas que carregam verdades que reconheço.</p>

      <p>É uma forma de ampliar o alcance da poesia, de explorar perspectivas diferentes, de emprestar voz a quem talvez não tenha meios de se expressar poeticamente, mas cuja história merece ser contada.</p>

      <h2>Além do eu lírico</h2>

      <p>Na escola, aprendemos sobre o "eu lírico" — essa voz que fala no poema e que não deve ser confundida com o poeta. Mas essa distinção, embora importante teoricamente, muitas vezes fica nebulosa na prática. Leitores tendem a assumir que todo poema é confessional.</p>

      <p>Quando comecei a trabalhar conscientemente com personagens, deixei essa distinção mais clara. Criei séries de poemas onde a voz é claramente de outra pessoa — uma idosa no asilo, um trabalhador noturno, uma criança que acabou de perder o pai.</p>

      <h2>O processo de criação</h2>

      <p>Como crio esses personagens? Começo geralmente com uma imagem ou situação. Vejo alguém na rua, ouço um fragmento de conversa, leio uma notícia. Algo captura minha atenção e me faz perguntar: o que essa pessoa sente? Como seria o mundo através dos seus olhos?</p>

      <blockquote>
        <p>"Criar um personagem poético é um ato de empatia radical. É tentar, através da linguagem, habitar uma vida que não é a minha."</p>
      </blockquote>

      <p>Então começo a anotar detalhes. Não apenas sobre a pessoa, mas sobre seu contexto — onde mora, que cheiro tem sua casa, que sons a acompanham no dia a dia. Quanto mais específico, mais real o personagem se torna.</p>

      <h2>A voz autêntica</h2>

      <p>O maior desafio é fazer a voz soar autêntica. Não quero que meus personagens sejam estereótipos ou caricaturas. Quero que sejam complexos, contraditórios, humanos. Isso exige pesquisa, observação, e muita empatia.</p>

      <p>Para um ciclo de poemas sobre trabalhadores da construção civil, passei semanas conversando com pedreiros, serventes, mestres de obra. Ouvi suas histórias, aprendi seu vocabulário, entendi seus sonhos e frustrações. Só então me senti preparado para escrever.</p>

      <h2>Responsabilidade ética</h2>

      <p>Existe uma responsabilidade grande em dar voz a personagens, especialmente se representam grupos marginalizados ou experiências de sofrimento. Não quero romantizar dor alheia nem falar por quem pode falar por si mesmo.</p>

      <p>Por isso, sempre que possível, mostro os poemas para pessoas que vivem aquelas realidades. Peço feedback, corrijo o que soa falso ou ofensivo. É um processo de humildade — reconhecer que, por mais que eu tente, há limites para o que posso compreender de uma experiência que não é minha.</p>

      <h2>Ampliando horizontes</h2>

      <p>Trabalhar com personagens me libertou de certa forma. Posso explorar temas, emoções, situações que pessoalmente nunca vivi, mas que me intrigam. Posso dar vazão a partes de mim que só emergem através dessas máscaras poéticas.</p>

      <p>Um dos meus projetos mais queridos é uma série de poemas em voz de idosos. Através deles, exploro questões de memória, perda, solidão, mas também sabedoria e aceitação. São temas que, apesar de eu mesmo não ser idoso, ressoam profundamente comigo.</p>

      <h2>Entre ficção e realidade</h2>

      <p>No final, todo personagem poético carrega algo do poeta. Por mais distante que seja a voz, é sempre filtrada pela minha sensibilidade, meu vocabulário, minhas preocupações. A distinção entre o autobiográfico e o ficcional nunca é absoluta.</p>

      <p>E talvez seja isso que torna a criação de personagens tão rica: ela me permite explorar aspectos de mim mesmo que só se revelam quando visto pelo filtro de outra vida, outra perspectiva. É um jogo de espelhos onde eu me descubro através do outro.</p>
    `,
    date: '2026-06-01',
    readTime: '7 min',
    category: 'Processo Criativo',
  },
];

import { fetchInstagramPosts } from './instagram';

// Função para buscar todos os posts (Instagram, com fallback para os mocks)
export async function getAllPosts(): Promise<BlogPost[]> {
  const instagramPosts = await fetchInstagramPosts();
  const posts = instagramPosts.length > 0 ? instagramPosts : blogPosts;
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Função para buscar um post por slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Função para buscar posts por categoria
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Função para formatar data
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
