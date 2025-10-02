import { useEffect, useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cepValue, setCepValue] = useState('');
  const [isContinueEnabled, setIsContinueEnabled] = useState(false);

  useEffect(() => {
    // Verifica se o script já existe
    const existingScript = document.querySelector('script[src*="converteai.net"]');
    if (!existingScript) {
      // Cria o elemento script
      const s = document.createElement("script");
      s.src = "https://scripts.converteai.net/7f004cb4-ff4b-48f5-8be2-7f09adfd539d/players/68daaf50aac00b46e24fb98c/v4/player.js";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  const formatCep = (value: string) => {
    value = value.replace(/\D/g, '');
    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5, 8);
    }
    return value.slice(0, 9);
  };

  const isValidCep = (value: string) => {
    return /^\d{5}-\d{3}$/.test(value);
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = formatCep(value);
    setCepValue(value);
    setIsContinueEnabled(isValidCep(value));
  };

  const handleCepKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enviar evento para Google Analytics
    const gtag = (window as any).gtag;
    if (gtag) {
      gtag('event', 'conversion', {
        'send_to': 'AW-17372990053',
        'event_category': 'cadastro',
        'event_label': 'whatsapp_click'
      });
    }
    
    // Abrir WhatsApp com mensagem
    const phoneNumber = '15558373106';
    const message = encodeURIComponent('Olá, desejo realizar meu cadastro como entregador.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsModalOpen(false);
    setCepValue('');
    setIsContinueEnabled(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      document.getElementById('cepInput')?.focus();
    }, 100);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCepValue('');
    setIsContinueEnabled(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          font-family: 'Roboto', Arial, sans-serif;
          background: #fff;
          color: #333;
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        #root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .header {
          background: #fff;
          display: flex;
          align-items: center;
          padding: 0 0 0 10px;
          height: 70px !important;
          min-height: 70px !important;
          box-shadow: 0 2px 4px rgba(0,0,0,0.04);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .header .back-arrow {
          color: #ff5722;
          font-size: 24px;
          margin-right: 12px;
          margin-top: 2px;
        }
        .header .title {
          font-size: 22px;
          font-weight: 400;
          color: #222;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
          letter-spacing: -0.5px;
        }
        .header .share {
          color: #ff5722;
          font-size: 24px;
          margin-right: 18px;
          margin-left: 10px;
          margin-top: 2px;
        }
        .orange-background {
          background: #f94f1c;
          padding-bottom: 0;
        }
        .main-banner-box {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding-top: 20px;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .main-banner-inner {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
        }
        .main-banner-inner .main-text {
          color: #fff;
          font-size: 26px;
          font-weight: 700;
          margin: 48px 0 12px 0;
          padding: 0 16px 0 16px;
          line-height: 1.25;
          text-align: center;
        }
        vturb-smartplayer {
          width: 100%;
          height: 100%;
          display: block;
        }
        vturb-smartplayer > * {
          width: 100%;
          height: 100%;
        }
        .app-section {
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 0;
          margin: 0;
          width: 100%;
        }
        .app-section-inner {
          display: flex;
          justify-content: center;
          align-items: stretch;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          margin-top: 0;
          margin-bottom: 0;
        }
        .cadastro-btn-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 32px 0 0 0;
        }
        .cadastro-btn {
          background: linear-gradient(180deg, #34d058 0%, #228c3a 100%);
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          padding: 18px 48px;
          border: none;
          border-radius: 8px;
          box-shadow: 0 2px 0 #17692a, 0 1px 6px rgba(0,0,0,0.10);
          cursor: pointer;
          transition: transform 0.1s, box-shadow 0.1s;
          text-shadow: 0 1px 2px rgba(0,0,0,0.08);
          letter-spacing: 0.5px;
          outline: none;
          position: relative;
        }
        .cadastro-btn:active {
          transform: translateY(2px);
          box-shadow: 0 1px 0 #17692a, 0 1px 6px rgba(0,0,0,0.10);
        }
        .requirements-section {
          background: #ff7a1a;
          border-radius: 18px;
          margin: 32px 16px 32px 16px;
          padding: 28px 22px 32px 22px;
          color: #fff;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          font-size: 15px;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }
        .requirements-section ul {
          padding-left: 20px;
          margin: 0;
          list-style: none;
        }
        .requirements-section ul li {
          margin-bottom: 14px;
          position: relative;
          padding-left: 22px;
          font-size: 14px;
          line-height: 1.45;
        }
        .requirements-section ul li:before {
          content: '\\f00c';
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          color: #fff;
          font-size: 14px;
          position: absolute;
          left: 0;
          top: 2px;
        }
        .scroll-top-btn {
          position: fixed;
          bottom: 32px;
          right: 24px;
          width: 64px;
          height: 64px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          cursor: pointer;
          border: none;
          outline: none;
          transition: box-shadow 0.2s;
        }
        .scroll-top-btn:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
        }
        .scroll-top-btn .fa-arrow-up {
          color: #ff7a1a;
          font-size: 32px;
        }
        .footer {
          background-color: #F54E1C;
          color: #fff;
          text-align: center;
          padding: 20px;
          margin-top: auto;
        }
        @media (max-width: 900px) {
          .main-banner-box {
            padding-top: 10px;
          }
          .main-banner-inner .main-text {
            font-size: 20px;
            margin-top: 32px;
          }
          .app-section-inner {
            flex-direction: column;
            align-items: stretch;
            margin-top: 0;
          }
          .cadastro-btn {
            font-size: 18px;
            padding: 14px 32px;
          }
          .requirements-section {
            margin: 32px 8px 32px 8px;
            padding: 22px 10px 28px 10px;
          }
        }
        @media (max-width: 600px) {
          .main-banner-box {
            padding-top: 5px;
          }
          .main-banner-inner .main-text {
            font-size: 17px;
            padding: 0 6px 0 6px;
            margin-top: 24px;
          }
          .cadastro-btn {
            font-size: 16px;
            padding: 12px 18px;
          }
          .requirements-section {
            font-size: 14px;
            padding: 16px 4px 18px 4px;
          }
          .requirements-section .req-title {
            font-size: 16px;
          }
          .header .title {
            font-size: 18px;
          }
          .scroll-top-btn {
            width: 48px;
            height: 48px;
          }
          .scroll-top-btn .fa-arrow-up {
            font-size: 22px;
          }
        }
      `}</style>

      <div className="header">
        <i className="fas fa-arrow-left back-arrow" data-testid="icon-back"></i>
        <span className="title" data-testid="text-title">
          Seja um Entregador Parceiro
        </span>
        <i className="fas fa-share share" data-testid="icon-share"></i>
      </div>

      <div className="orange-background">
        <div className="main-banner-box">
          <div className="main-banner-inner">
            <div className="main-text">
              Seja um Entregador Parceiro e faça parte da nossa Empresa:
            </div>
            <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', aspectRatio: '16/9' }}>
              <div 
                dangerouslySetInnerHTML={{
                  __html: '<vturb-smartplayer id="vid-68daaf50aac00b46e24fb98c" style="display: block; width: 100%; height: 100%;"></vturb-smartplayer>'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="app-section">
        <div className="app-section-inner">
          <div className="cadastro-btn-wrapper">
            <button className="cadastro-btn" onClick={openModal} data-testid="button-cadastro">
              Realizar Cadastro
            </button>
          </div>
        </div>
      </div>

      <div className="requirements-section">
        <ul>
          <li>
            Você recebe as rotas de entrega diretamente pelo aplicativo, com todas as informações necessárias para realizar as entregas do dia.
          </li>
          <li>
            As coletas e entregas são feitas em pontos definidos, otimizando o tempo e facilitando o trajeto.
          </li>
          <li>
            O pagamento é realizado diariamente, de acordo com as entregas concluídas.
          </li>
          <li>
            Você pode escolher os dias e horários em que deseja trabalhar, tendo flexibilidade para montar sua própria rotina.
          </li>
          <li>
            O suporte está disponível para ajudar em caso de dúvidas ou imprevistos durante as entregas.
          </li>
          <li>
            O aplicativo mostra o histórico de entregas, ganhos e avaliações, permitindo acompanhar seu desempenho.
          </li>
          <li>
            As entregas podem ser feitas em diferentes tipos de veículos, de acordo com a sua disponibilidade e preferência.
          </li>
          <li>
            O processo de entrega é simples: basta aceitar a rota, coletar os pacotes e realizar as entregas nos endereços indicados.
          </li>
        </ul>
      </div>

      <button className="scroll-top-btn" onClick={scrollToTop} data-testid="button-scroll-top">
        <i className="fas fa-arrow-up"></i>
      </button>

      <footer className="footer">
        <p>&copy; 2025 Cadastro de Entregadores. Todos os direitos reservados.</p>
        <p style={{ fontSize: '12px', marginTop: '4px' }}>CNPJ: 60.123.871/0001-24 | Suporte: +1 555 837 3106</p>
      </footer>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onMouseDown={handleOverlayClick}
          data-testid="modal-overlay"
        >
          <div className="bg-white rounded-[6px] shadow-lg w-full max-w-md mx-4 p-6 relative">
            <button 
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl focus:outline-none"
              data-testid="button-close-modal"
            >
              <i className="fas fa-times"></i>
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Digite seu CEP</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="cepInput" className="block text-gray-700 text-base mb-2">CEP</label>
              <input
                id="cepInput"
                name="cep"
                type="text"
                inputMode="numeric"
                pattern="\d{5}-\d{3}"
                maxLength={9}
                className="w-full border border-gray-300 rounded-[6px] px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                placeholder="00000-000"
                autoComplete="postal-code"
                value={cepValue}
                onChange={handleCepChange}
                onKeyPress={handleCepKeyPress}
                data-testid="input-cep"
              />
              <button
                type="submit"
                className="w-full mt-6 py-3 rounded-[6px] bg-orange-500 text-white font-bold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isContinueEnabled}
                data-testid="button-continuar"
              >
                Continuar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
