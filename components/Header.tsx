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
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo/Nome */}
          <Link href="/" className="text-3xl md:text-4xl font-serif font-light tracking-wide">
            Vanilson Reis
          </Link>

          {/* Menu de navegação */}
          <nav>
            <ul className="flex flex-wrap gap-8 text-sm tracking-wider">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors hover:text-neutral-600 ${
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
