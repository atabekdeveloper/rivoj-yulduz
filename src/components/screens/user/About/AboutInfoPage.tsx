import React from 'react';
import LazyLoad from 'react-lazyload';
import about1 from 'src/assets/images/about/aboutInfo1.jpg';
import about2 from 'src/assets/images/about/aboutInfo2.jpg';

import { AboutEmployers } from './AboutEmployers';

import s from './about.module.scss';

const AboutInfoPage: React.FC = () => (
  <div className={s.about}>
    <div className="container">
      <h1 className="title">О нас</h1>
      <div className={s.body}>
        <LazyLoad>
          <img src={about1} alt="About Info 1" />
        </LazyLoad>
        <div className={s.title}>
          <h2>Кто мы</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Id cras ornare nulla dictum vel nam nam non
            convallis. Ut sed bibendum blandit bibendum aliquam est risus quam. Tellus neque augue
            in luctus ut in platea. Faucibus aliquam a velit nisl dictum nulla tristique et
            bibendum. Lobortis tempus suspendisse quis vitae. Facilisis lorem consequat blandit leo
            integer. Volutpat integer habitant porta ut quam. Id urna euismod erat at egestas porta
            sem. Enim eu in ullamcorper vitae viverra consectetur condimentum purus. Habitasse
            commodo quam nisl tristique quam interdum blandit. Sed sit et aliquam quis porta. Amet
            urna metus rhoncus egestas dui non tellus duis sodales. Ultrices facilisi amet erat
            blandit. Urna massa scelerisque a mauris. In lectus ornare commodo dolor quis tristique
            sit neque. Integer viverra nunc adipiscing nullam etiam non diam. Cursus libero
            habitasse libero id. Sem consectetur commodo senectus bibendum. Convallis vestibulum
            urna amet nunc dignissim. Consectetur netus nulla lacus porta ipsum vitae netus ut.
            Integer sit egestas orci lorem dignissim proin sed vestibulum. Suscipit nullam placerat
            ullamcorper morbi amet.
          </p>
        </div>
        <LazyLoad>
          <img src={about2} alt="About Info 2" />
        </LazyLoad>
        <div className={s.title}>
          <h2>Что мы делаем?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Id cras ornare nulla dictum vel nam nam non
            convallis. Ut sed bibendum blandit bibendum aliquam est risus quam. Tellus neque augue
            in luctus ut in platea. Faucibus aliquam a velit nisl dictum nulla tristique et
            bibendum. Lobortis tempus suspendisse quis vitae. Facilisis lorem consequat blandit leo
            integer. Volutpat integer habitant porta ut quam. Id urna euismod erat at egestas porta
            sem. Enim eu in ullamcorper vitae viverra consectetur condimentum purus. Habitasse
            commodo quam nisl tristique quam interdum blandit. Sed sit et aliquam quis porta. Amet
            urna metus rhoncus egestas dui non tellus duis sodales. Ultrices facilisi amet erat
            blandit. Urna massa scelerisque a mauris. In lectus ornare commodo dolor quis tristique
            sit neque. Integer viverra nunc adipiscing nullam etiam non diam. Cursus libero
            habitasse libero id. Sem consectetur commodo senectus bibendum. Convallis vestibulum
            urna amet nunc dignissim. Consectetur netus nulla lacus porta ipsum vitae netus ut.
            Integer sit egestas orci lorem dignissim proin sed vestibulum. Suscipit nullam placerat
            ullamcorper morbi amet.
          </p>
        </div>
        <AboutEmployers />
      </div>
    </div>
  </div>
);

export { AboutInfoPage };
