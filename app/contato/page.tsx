'use client';

import { useState, FormEvent } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Validação de email
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validar campos
  const validateForm = () => {
    const newErrors = {
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    };

    let isValid = true;

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'E-mail inválido';
      isValid = false;
    }

    if (!formData.assunto.trim()) {
      newErrors.assunto = 'Assunto é obrigatório';
      isValid = false;
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória';
      isValid = false;
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = 'Mensagem deve ter pelo menos 10 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Manipular mudanças nos campos
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpar erro ao começar a digitar
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Enviar formulário
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simular envio (2 segundos)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Limpar formulário
      setFormData({
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
      });

      // Esconder mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Cabeçalho da página */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-4 sm:mb-6">
          Contato
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl">
          Entre em contato para palestras, entrevistas ou informações sobre os livros.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 md:gap-12">
        {/* Formulário de contato */}
        <div className="md:col-span-3">
          {/* Mensagem de sucesso */}
          {showSuccess && (
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-green-50 border border-green-200 text-green-800">
              <h3 className="font-medium mb-2 text-sm sm:text-base">Mensagem enviada com sucesso!</h3>
              <p className="text-xs sm:text-sm">
                Obrigado pelo contato. Retornaremos em breve.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Nome */}
            <div>
              <label
                htmlFor="nome"
                className="block text-xs sm:text-sm font-medium mb-2"
              >
                Nome *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border text-sm sm:text-base ${
                  errors.nome ? 'border-red-500' : 'border-neutral-300'
                } focus:border-black focus:outline-none transition-colors`}
                placeholder="Seu nome completo"
              />
              {errors.nome && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.nome}</p>
              )}
            </div>

            {/* E-mail */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium mb-2"
              >
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border text-sm sm:text-base ${
                  errors.email ? 'border-red-500' : 'border-neutral-300'
                } focus:border-black focus:outline-none transition-colors`}
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Assunto */}
            <div>
              <label
                htmlFor="assunto"
                className="block text-xs sm:text-sm font-medium mb-2"
              >
                Assunto *
              </label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border text-sm sm:text-base ${
                  errors.assunto ? 'border-red-500' : 'border-neutral-300'
                } focus:border-black focus:outline-none transition-colors`}
                placeholder="Sobre o que você quer falar?"
              />
              {errors.assunto && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.assunto}</p>
              )}
            </div>

            {/* Mensagem */}
            <div>
              <label
                htmlFor="mensagem"
                className="block text-xs sm:text-sm font-medium mb-2"
              >
                Mensagem *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={6}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border text-sm sm:text-base ${
                  errors.mensagem ? 'border-red-500' : 'border-neutral-300'
                } focus:border-black focus:outline-none transition-colors resize-none`}
                placeholder="Escreva sua mensagem..."
              />
              {errors.mensagem && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.mensagem}</p>
              )}
            </div>

            {/* Botão de envio */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 sm:py-4 px-6 sm:px-8 text-white font-medium tracking-wider transition-colors text-sm sm:text-base ${
                isSubmitting
                  ? 'bg-neutral-400 cursor-not-allowed'
                  : 'bg-black hover:bg-neutral-800'
              }`}
            >
              {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
            </button>

            <p className="text-xs sm:text-sm text-neutral-500">
              * Campos obrigatórios
            </p>
          </form>
        </div>

        {/* Informações de contato direto */}
        <div className="md:col-span-2">
          <div className="bg-neutral-50 p-6 sm:p-8 border border-neutral-200">
            <h2 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6">Contato Direto</h2>

            <div className="space-y-4 sm:space-y-6">
              {/* E-mail */}
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-neutral-500 mb-2">
                  E-MAIL
                </h3>
                <a
                  href="mailto:contato@vanilsonreis.com"
                  className="text-base sm:text-lg hover:text-neutral-600 transition-colors break-all"
                >
                  contato@vanilsonreis.com
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-neutral-500 mb-2">
                  WHATSAPP
                </h3>
                <a
                  href="https://wa.me/5561999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg hover:text-neutral-600 transition-colors inline-flex items-center gap-2"
                >
                  (61) 99999-9999
                  <span className="text-xs sm:text-sm">↗</span>
                </a>
              </div>

              {/* Redes sociais */}
              <div className="pt-4 sm:pt-6 border-t border-neutral-200">
                <h3 className="text-xs sm:text-sm font-medium text-neutral-500 mb-3 sm:mb-4">
                  REDES SOCIAIS
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com/vanilsonreis4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-neutral-600 transition-colors text-sm sm:text-base"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Horário de atendimento */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-neutral-200">
              <p className="text-xs sm:text-sm text-neutral-600">
                Respondemos normalmente em até 48 horas úteis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
