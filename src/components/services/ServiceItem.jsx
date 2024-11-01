// src/components/ServiceItem.js
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ServiceItem.css';

function ServiceItem({ index, service, handleResponse }) {
  const [buttonText, setButtonText] = useState('Deu para entender?');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5, // Quando 50% do item estiver visível, a animação começa
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('center');
    }
  }, [controls, inView]);

  const handleSim = () => {
    setButtonText('Entendido!');
    setButtonDisabled(true);
    handleResponse(index, true);
  };

  const handleNao = () => {
    setButtonText('Preciso de ajuda');
    setButtonDisabled(true);
    handleResponse(index, false);
  };

  const variants = {
    enter: {
      opacity: 0,
      x: 100,
    },
    center: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <motion.div
      className="service-item"
      id={`service-${index}`}
      ref={ref}
      initial="enter"
      animate={controls}
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="service-box">
        <i className={service.icon}></i>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <button className="understand-btn" disabled={buttonDisabled}>
          {buttonText}
        </button>
        {!buttonDisabled && (
          <div className="option-buttons">
            <button onClick={handleSim} className="btn-sim">
              Sim
            </button>
            <button onClick={handleNao} className="btn-nao">
              Não
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ServiceItem;
