/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React from 'react';

import s from './contact.module.scss';

const ContactPage: React.FC = () => (
  <div className={s.contact}>
    <div className="container">
      <div className={s.body}>
        <div className={s.info}>
          <h2>Контакты</h2>
          <p>
            <span>г. Нукус, просп. Узбекистана, 19</span>
            <a href="tel:+998913838831">Тел: 8 91 383 88 31</a>
            <a href="tel:+998883578831">Тел: 8 88 357 88 31</a>
          </p>
          <p>График работы: Пн-Сб, 9:00 — 18:30</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.2135093645486!2d59.61156628575969!3d42.45050194295501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9bd4675db195%3A0x40bfed160e8d5e47!2sOOO%20%22RIVOJ%20YULDUZ%22!5e0!3m2!1sru!2s!4v1695188507765!5m2!1sru!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

export { ContactPage };
