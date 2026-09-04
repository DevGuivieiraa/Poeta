export default function Termos() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Cabeçalho da página */}
      <h1 className="text-4xl md:text-5xl font-serif font-light mb-8">
        Termos de Serviço
      </h1>

      <div className="space-y-6 text-neutral-700 leading-relaxed">
        <p className="text-neutral-600 leading-relaxed mb-4">
          Bem-vindo ao site pessoal de Vanilson Reis, poeta e palestrante. 
          Ao acessar e navegar por este site, você concorda com os seguintes termos de uso.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          1. Sobre o Site
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Este é o site pessoal do poeta Vanilson Reis, criado para divulgar sua obra literária, 
          trajetória profissional e compartilhar conteúdo relacionado à poesia, literatura e cultura.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          2. Direitos Autorais
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Todo o conteúdo disponível neste site, incluindo mas não se limitando a textos, poemas, 
          biografia, fotografias e informações sobre livros publicados, é de autoria de Vanilson Reis 
          e está protegido por direitos autorais.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-4">
          A reprodução, distribuição ou uso comercial de qualquer conteúdo deste site sem autorização 
          prévia e expressa do autor é estritamente proibida.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          3. Cantinho da Poesia
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          A seção "Cantinho da Poesia" exibe automaticamente conteúdo publicado pelo autor em suas 
          redes sociais oficiais (Instagram). Este conteúdo é integrado diretamente das plataformas 
          e reflete as publicações públicas do autor.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          4. Uso do Site
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          O uso deste site é destinado exclusivamente para fins informativos e culturais. 
          Os visitantes concordam em utilizar o site de forma responsável e em conformidade 
          com todas as leis aplicáveis.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          5. Isenção de Responsabilidade
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Embora façamos todos os esforços para manter as informações atualizadas e precisas, 
          não garantimos a completude ou exatidão de todo o conteúdo apresentado. O site é 
          fornecido "como está", sem garantias de qualquer tipo.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          6. Links Externos
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Este site pode conter links para sites externos e redes sociais. Não somos responsáveis 
          pelo conteúdo ou práticas de privacidade de sites de terceiros.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          7. Modificações
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. 
          As alterações entrarão em vigor imediatamente após sua publicação no site.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          8. Contato
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Para dúvidas, esclarecimentos ou solicitações relacionadas a estes Termos de Serviço, 
          entre em contato através do e-mail:{' '}
          <a 
            href="mailto:contato@vanilsonreis.com" 
            className="text-black underline hover:text-neutral-600 transition-colors"
          >
            contato@vanilsonreis.com
          </a>
        </p>

        <div className="mt-12 pt-6 border-t border-neutral-200">
          <p className="text-sm text-neutral-500">
            Última atualização: Setembro de 2026
          </p>
        </div>
      </div>
    </div>
  );
}
