import React from 'react';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook, BsTelegram, BsTiktok } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import logo from 'src/assets/images/logo.svg';

import s from './footer.module.scss';

const Footer: React.FC = () => (
  <footer className={s.footer}>
    <div className="container">
      <div className={s.body}>
        <LazyLoad>
          <img className={s.logo} src={logo} alt="Logo" />
        </LazyLoad>
        <div className={s.address}>
          <FaMapMarkerAlt size={20} />
          <p>
            <span>г. Нукус, просп. Узбекистана, 19</span>
            <a href="tel:+998913838831">Тел: 8 91 383 88 31</a>
            <a href="tel:+998883578831">Тел: 8 88 357 88 31</a>
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
            <a
              key="YouTube"
              href="https://www.youtube.com/@rivojyulduz"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillYoutube size={25} cursor="pointer" />
            </a>
            <a
              key="Facebook"
              href="https://www.facebook.com/rivojyulduz/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook size={25} cursor="pointer" />
            </a>
            <a
              key="TikTok"
              href="https://www.tiktok.com/@rivojyulduz?_t=8h4qrWA8nhv&_r=1"
              target="_blank"
              rel="noreferrer"
            >
              <BsTiktok size={25} cursor="pointer" />
            </a>
          </p>
        </div>
      </div>
      <p className={s.bottom}>© Rivoj Yulduz 2023</p>
    </div>
  </footer>
);

export { Footer };
