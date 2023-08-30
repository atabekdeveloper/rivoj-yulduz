import React from 'react';
import Img from 'react-cool-img';
import about from 'src/assets/images/about/about.jpg';

import s from './about.module.scss';

const AboutPage: React.FC = () => (
  <div className={s.about}>
    <div className={s.content}>
      <h1>О нас</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Sit sem et ultrices nullam justo mattis nisi. Dolor
        aliquet nec ac purus nunc id. Bibendum hac posuere facilisi congue in rhoncus sed diam. Sed
        amet in malesuada tempor consequat congue varius diam integer. In elit leo est mattis et
        rhoncus. Nulla cras a felis duis fringilla in gravida. Aliquet ac morbi nisl est leo iaculis
        cursus donec sed. Malesuada ipsum feugiat ac felis pharetra maecenas risus. Amet dignissim
        rhoncus velit in sed at senectus aliquam in. Libero convallis risus in aliquet vitae purus.
        Magna ipsum sed mi purus in nisl lectus. Nisi et vitae aliquet amet sed sed nam. Elit
        ultrices in orci ante ornare lobortis lorem tortor non. Justo urna nulla ut pellentesque
        sollicitudin nullam. Convallis sem tristique non leo vitae vivamus turpis vel. Cursus tortor
        eget consectetur pharetra amet sem a. Purus lorem varius.
      </p>
    </div>
    <Img className={s.img} src={about} alt="About" />
  </div>
);

export { AboutPage };
