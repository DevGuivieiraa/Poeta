'use client';

import { useState, ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      {/* Navegação das Abas */}
      <div className="border-b border-neutral-200 mb-12">
        <nav className="flex gap-8 md:gap-12" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`
                pb-4 text-sm md:text-base tracking-wider transition-all relative
                ${
                  activeTab === tab.id
                    ? 'text-black font-medium'
                    : 'text-neutral-400 hover:text-neutral-600'
                }
              `}
            >
              {tab.label}
              
              {/* Indicador de aba ativa */}
              <span
                className={`
                  absolute bottom-0 left-0 right-0 h-[2px] bg-black transition-all duration-300
                  ${activeTab === tab.id ? 'opacity-100' : 'opacity-0'}
                `}
              />
            </button>
          ))}
        </nav>
      </div>

      {/* Conteúdo das Abas */}
      <div className="relative">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={tab.id}
            className={`
              transition-all duration-500
              ${
                activeTab === tab.id
                  ? 'opacity-100 translate-y-0 relative'
                  : 'opacity-0 translate-y-4 absolute top-0 left-0 pointer-events-none'
              }
            `}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
