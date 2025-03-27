import React, { useEffect } from 'react';

const EventosOficinas = () => {
  useEffect(() => {
    console.log("Página de Eventos e Oficinas carregada!");
  }, []);

  return (
    <section id="eventos-oficinas">
      <h1>Eventos e Oficinas</h1>
      <div className="evento-box">Evento 1</div>
      <div className="evento-box">Evento 2</div>
    </section>
  );
};

export default EventosOficinas;

/*import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <h1>Bem-vindo à nossa instituição</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>
  );
};

export default Home;*/
