
import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <ul className={styles.social_list}>
        <li>
        <a href="https://www.facebook.com/share/16ahjat5Lp/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className={styles.facebook}/>
        </a>
        </li>
        <li>
        <a href="https://www.instagram.com/ieediomicio/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.instagram}/>
          </a>
        </li>
        <li>
        <a href="https://www.youtube.com/@InstitutodeeducacaoespecialDIO" target="_blank" rel="noopener noreferrer">
          <FaYoutube className={styles.youtube}/>
          </a>
        </li>
      </ul>
      <p>&copy; {new Date().getFullYear()} Nos siga nas redes sociais</p>
    </footer>
  );
};

export default Footer;
