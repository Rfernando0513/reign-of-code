import React, { useState } from 'react';
import ServiceItem from './ServiceItem';
import Popup from '../Popup';
// import '../styles/Services.css';

function Services() {
  const services = [
    {
      icon: 'fas fa-shopping-cart',
      title: 'Desenvolvimento de E-commerce',
      description:
        'Criamos plataformas de comércio eletrônico personalizadas, otimizadas para aumentar conversões e melhorar a experiência do usuário.',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Aplicativos Mobile',
      description:
        'Desenvolvimento de aplicativos móveis para iOS e Android, focados em usabilidade, desempenho e design intuitivo.',
    },
    {
      icon: 'fas fa-warehouse',
      title: 'Controle de Estoque',
      description:
        'Soluções que permitem o gerenciamento eficiente de inventários, com possibilidade de integração com outros sistemas.',
    },
    {
      icon: 'fas fa-code-branch',
      title: 'Regras de Negócio Complexas',
      description:
        'Desenvolvemos sistemas que atendem às especificidades de cada negócio, por mais complexas que sejam.',
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Hubs de Conexão',
      description:
        'Criamos hubs que conectam diferentes pontos de informação, centralizando dados e facilitando a comunicação entre sistemas.',
    },
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [responses, setResponses] = useState(Array(services.length).fill(null));
  const [showPopup, setShowPopup] = useState(false);

  const handleResponse = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);

    if (index < services.length - 1) {
      setCurrentServiceIndex(index + 1);
    } else {
      setShowPopup(true);
    }
  };

  return (
    <section className="services" id="services">
      <div className="service-container">
        {/* Exibe o item de serviço atual */}
        <ServiceItem
          key={currentServiceIndex}
          index={currentServiceIndex}
          service={services[currentServiceIndex]}
          handleResponse={handleResponse}
        />
      </div>

      {/* Exibe o popup após o último serviço */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </section>
  );
}

export default Services;
