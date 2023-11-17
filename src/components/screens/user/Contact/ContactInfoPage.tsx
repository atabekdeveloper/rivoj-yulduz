import React from 'react';
import { useResponsive } from 'src/hooks';

import { ContactForm } from './ContactForm';

import s from './contact.module.scss';

const ContactInfoPage: React.FC = () => {
  const { isMobile } = useResponsive(770);
  return (
    <div className={s.contactInfo} id="contact">
      <ul className={s.absoluteItems}>
        <li />
        <li />
      </ul>
      <div className={isMobile ? '' : 'container'}>
        <div className={s.inner}>
          <div className={s.info}>
            <h1>Контакты</h1>
            <div>
              <p>г. Нукус, просп. Узбекистана, 19</p>
              <p>Тел: 8 91 383 88 31</p>
              <p>Тел: 8 88 357 88 31</p>
            </div>
            <p>График работы: Пн-Сб, 9:00 — 18:30</p>
          </div>
          <div className={s.form}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactInfoPage };
