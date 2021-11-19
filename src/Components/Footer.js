import React from 'react';
import styles from './Footer.module.css';
import Logo from '../Assets/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <center>
        <img className="logofooter" width="130" src={Logo} />
      </center>
      <p>
        <b>
          © Criado por Mariane B. Caldeira, 2021.
        </b>  
      </p>
    </footer>
  );
};

export default Footer;