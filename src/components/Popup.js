// src/components/Popup.js
import React from 'react';
import '../styles/Popup.css';

function Popup({ onClose }) {
  return (
    <div className="popup-form">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Parabéns, você conheceu a Reign of Code</h2>
        <p>
          Agora queremos conhecer você. Por favor, preencha o formulário abaixo:
        </p>
        <form>
          <input type="text" placeholder="Nome da Empresa" required />
          <input type="email" placeholder="E-mail de Contato" required />
          <input type="tel" placeholder="Telefone" required />
          <textarea
            placeholder="Conte-nos sobre sua empresa e necessidades"
            rows="5"
            required
          ></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
