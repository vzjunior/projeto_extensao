import React from 'react';
import styles from '../Section.module.css';
import stylesContatos from './Contatos.module.css';

const Contatos = () => {
  return (
    <section className={styles.section} id="contato">
      <h2>Contato</h2>

      <form className={stylesContatos.form}>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>

      <div className={stylesContatos.infoContato}>
        <h3>Informações do Instituto</h3>
        <p><strong>Telefone:</strong> (48) 3433-8235</p>
        <p><strong>Celular:</strong> (48) 99838-4125</p>
        <p><strong>CNPJ:</strong> 75.567.081/0001-05</p>
        <p><strong>E-mail:</strong> institutoeduc.especialdf@gmail.com</p>
        <p><strong>Endereço:</strong> Rua Lúcia Milioli, 211 - Santa Bárbara</p>
        <p><strong>CEP:</strong> 88802-020</p>
      </div>
    </section>
  );
};

export default Contatos;
