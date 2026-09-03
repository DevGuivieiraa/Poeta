'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: 'BIOGRAFIA', href: '/biografia' },
  { label: 'LIVROS', href: '/livros' },
  { label: 'CANTINHO DA POESIA', href: '/blog' },
  { label: 'CONTATO', href: '/contato' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header-bg border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          {/* Logo/Nome */}
          <Link href="/" className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-wide text-center md:text-left">
            Vanilson Reis
          </Link>

          {/* Menu de navegação */}
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm tracking-wider">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors hover:text-neutral-600 whitespace-nowrap ${
                      pathname === item.href
                        ? 'text-black font-medium'
                        : 'text-neutral-500'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
