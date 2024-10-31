// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Transformando Ideias em Soluções Digitais</h1>
        <p>Desenvolvimento de software personalizado para o seu negócio</p>
        <a href="#about" className="btn">Saiba Mais</a>
      </div>
    </section>
  );
}

export default Hero;
