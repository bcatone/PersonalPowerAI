import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__copyrights">&copy; 2023</p>
        <a
          className="footer__link center"
          href="https://www.womenwhocode.com/"
          target="_blank"
          rel="noreferrer"
        >
          About this Project
        </a>
        <a
          className="footer__link"
          href="https://www.womenwhocode.com/"
          target="_blank"
          rel="noreferrer"
        >
          Women Who Code
        </a>
        <a
          className="footer__link"
          href="https://github.com/danakun"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
