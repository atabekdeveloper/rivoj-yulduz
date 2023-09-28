import React from 'react';
import Img from 'react-cool-img';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from 'src/assets/images/logo.svg';

import s from './footer.module.scss';

const Footer: React.FC = () => (
  <footer className={s.footer}>
    <div className="container">
      <div className={s.body}>
        <Img className={s.logo} src={logo} alt="Logo" />
        <div className={s.address}>
          <FaMapMarkerAlt size={20} />
          <p>
            <span>г. Нукус, просп. Узбекистана, 19</span>
            <span>Тел: 8 91 383 88 31</span>
          </p>
        </div>
        <div className={s.links}>
          <p>Наши соц. сети</p>
          <p>
            <a
              key="Instagram"
              href="https://www.instagram.com/rivojyulduz/?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram size={30} cursor="pointer" />
            </a>
            <a key="Telegram" href="https://t.me/rivojyulduzgroup" target="_blank" rel="noreferrer">
              <BsTelegram size={25} cursor="pointer" />
            </a>
          </p>
        </div>
      </div>
      <p className={s.bottom}>© Rivoj Yulduz 2023</p>
    </div>
  </footer>
);

export { Footer };
