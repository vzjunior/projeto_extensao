import React from 'react';
import  styles from '../Section.module.css';
import stylesHome from './Home.module.css';
import imgNews1 from '../../assets/images/fotoTesteHome.jpeg';
import imgNews2 from '../../assets/images/fotoTesteHome.jpeg';
import imgEvent1 from '../../assets/images/fotoTesteHome.jpeg';
import imgEvent2 from '../../assets/images/fotoTesteHome.jpeg';
import imgEvent3 from '../../assets/images/fotoTesteHome.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className={ styles.section} id="home">
      <h1>Instituto Diomício Freitas</h1>
      <p>Transformando vidas através da inclusão e da educação especial.</p>

      <div className={stylesHome.newsSection}>
      <h2>Notícias</h2>
        <div className={stylesHome.newsCard}>
          <img src={imgNews1} alt="Notícia 1" />
          <span className={stylesHome.category}>NEWS</span>
          <h3>Lorem ipsum dolor sit amet</h3>
          <Link to="/noticias/1" className={stylesHome.saibaMais}>Saiba mais</Link>
          <span className={stylesHome.date}>14 June 2023</span>
        </div>

        <div className={stylesHome.newsCard}>
          <img src={imgNews2} alt="Notícia 2" />
          <span className={stylesHome.category}>NEWS</span>
          <h3>Lorem ipsum dolor sit amet</h3>
          <Link to="/noticias/1" className={stylesHome.saibaMais}>Saiba mais</Link>
          <span className={ stylesHome.date}>13 June 2023</span>
        </div>
      </div>

      

      <div className={ stylesHome.eventsHeader}>
        <h2>Eventos </h2>
      </div>

      <div className={ stylesHome.eventsGrid}>
        <div className={ stylesHome.eventCard}>
          <img src={imgEvent1} alt="Evento 1" />
          <span className={ stylesHome.category}>EVENTS</span>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>JANE DRINKS</p>
          <Link to="/noticias/1" className={ stylesHome.saibaMais}>Saiba mais</Link>
          <span className={ stylesHome.date}>13 June 2023</span>
        </div>

        <div className={ stylesHome.eventCard}>
          <img src={imgEvent2} alt="Evento 2" />
          <span className={ stylesHome.category}>EVENTS</span>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>TONY HUNGRY</p>
          <Link to="/noticias/1" className={ stylesHome.saibaMais}>Saiba mais</Link>
          <span className={ stylesHome.date}>13 June 2023</span>
        </div>

        <div className={ stylesHome.eventCard}>
          <img src={imgEvent3} alt="Evento 3" />
          <span className={ stylesHome.category}>EVENTS</span>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>TONY HUNGRY</p>
          <Link to="/noticias/1" className={ stylesHome.saibaMais}>Saiba mais</Link>
          <span className={ stylesHome.date}>13 June 2023</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
