import React from 'react';

const Contatos = () => {
  return (
    <section id="contato">
      <h2>Contato</h2>
      <form>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contatos;
