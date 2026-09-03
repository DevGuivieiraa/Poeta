export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-500 text-center md:text-left">
          <p className="font-serif">© {currentYear} Vanilson Reis. Todos os direitos reservados.</p>
          
          <div className="flex gap-4 sm:gap-6 justify-center md:justify-end">
            <a
              href="mailto:contato@vanilsonreis.com"
              className="hover:text-black transition-colors"
            >
              Email
            </a>
            <a
              href="https://instagram.com/vanilsonreis4"
              className="hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
