export default function Privacidade() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Cabeçalho da página */}
      <h1 className="text-4xl md:text-5xl font-serif font-light mb-8">
        Política de Privacidade
      </h1>

      <div className="space-y-6 text-neutral-700 leading-relaxed">
        <p className="text-neutral-600 leading-relaxed mb-4">
          A privacidade dos visitantes deste site é de extrema importância para nós. 
          Esta Política de Privacidade descreve como tratamos as informações relacionadas 
          ao uso do site de Vanilson Reis.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          1. Coleta de Dados Pessoais
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Este site <strong>não coleta dados pessoais</strong> dos visitantes de forma automática 
          ou passiva. Não utilizamos cookies de rastreamento, analytics invasivos ou qualquer 
          tecnologia que capture informações sobre sua navegação sem seu conhecimento.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Os únicos dados pessoais que podemos receber são aqueles fornecidos <strong>voluntariamente</strong> 
          por você através do formulário de contato disponível no site, que incluem: nome, e-mail, 
          assunto e mensagem.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          2. Uso das Informações
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          As informações fornecidas voluntariamente através do formulário de contato são utilizadas 
          exclusivamente para responder às suas solicitações, dúvidas ou comentários. Não utilizamos 
          essas informações para fins de marketing, publicidade ou qualquer outra finalidade não 
          relacionada à sua comunicação conosco.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          3. Compartilhamento de Dados
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          <strong>Não compartilhamos, vendemos ou transferimos</strong> seus dados pessoais para 
          terceiros em nenhuma circunstância, exceto quando exigido por lei ou para proteger 
          nossos direitos legais.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Não utilizamos serviços de terceiros para publicidade direcionada ou rastreamento de 
          comportamento dos visitantes.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          4. Cookies e Tecnologias de Rastreamento
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Este site <strong>não utiliza cookies de rastreamento</strong> ou quaisquer tecnologias 
          similares para monitorar seu comportamento de navegação. Cookies essenciais para o 
          funcionamento básico do site (como preferências de sessão) podem ser utilizados, 
          mas não coletam informações pessoais identificáveis.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          5. Integração com Redes Sociais
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          O site integra APIs do Instagram para exibir publicamente o conteúdo já publicado 
          pelo autor nessas plataformas na seção "Cantinho da Poesia". Esta integração é feita 
          de forma server-side (no servidor), o que significa que:
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-600 ml-4 mb-4">
          <li>Nenhum dado pessoal dos visitantes é enviado ao Instagram</li>
          <li>A integração não rastreia ou identifica visitantes do site</li>
          <li>Apenas conteúdo público já disponível nas redes sociais do autor é exibido</li>
        </ul>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          6. Segurança das Informações
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Implementamos medidas de segurança adequadas para proteger as informações fornecidas 
          voluntariamente através do formulário de contato. No entanto, nenhum método de 
          transmissão pela internet é 100% seguro, e não podemos garantir segurança absoluta.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          7. Direitos dos Usuários
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Você tem o direito de:
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-600 ml-4 mb-4">
          <li>Solicitar informações sobre dados pessoais que possamos ter sobre você</li>
          <li>Solicitar a correção ou exclusão de seus dados pessoais</li>
          <li>Retirar seu consentimento para processamento de dados a qualquer momento</li>
        </ul>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          8. Sites de Terceiros
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Este site pode conter links para sites externos e redes sociais. Não somos responsáveis 
          pelas práticas de privacidade ou conteúdo de sites de terceiros. Recomendamos que você 
          leia as políticas de privacidade de qualquer site que visitar.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          9. Alterações nesta Política
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. 
          Quaisquer alterações serão publicadas nesta página com uma data de atualização revisada.
        </p>

        <h2 className="text-2xl font-serif mt-8 mb-3 text-black">
          10. Contato
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Para dúvidas, solicitações ou preocupações relacionadas a esta Política de Privacidade 
          ou ao tratamento de seus dados pessoais, entre em contato através do e-mail:{' '}
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
