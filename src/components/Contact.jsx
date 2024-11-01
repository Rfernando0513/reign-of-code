// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Entre em Contato</h2>
      <form>
        <input type="text" placeholder="Seu Nome" required />
        <input type="email" placeholder="Seu E-mail" required />
        <input type="text" placeholder="Assunto" required />
        <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
        <button type="submit">Enviar Mensagem</button>
      </form>
    </section>
  );
}

export default Contact;