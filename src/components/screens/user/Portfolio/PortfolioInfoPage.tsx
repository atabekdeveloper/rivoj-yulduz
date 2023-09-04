import React from 'react';
import Img from 'react-cool-img';
import pImg from 'src/assets/images/portfolio/img.jpg';

import s from './portfolio.module.scss';

const PortfolioInfoPage: React.FC = () => {
  const x = 0;
  return (
    <div className={s.info}>
      <div className="container">
        <h1 className="title">Наши работы</h1>
        <ul className={s.items}>
          <li className={s.item}>
            <Img src={pImg} alt="Title" />
            <h2>InterActive</h2>
            <p>
              Egestas sagittis quis ultrices iaculis viverra id. Laoreet ipsum vitae lobortis erat
              metus orci facilisi elementum. Sem in eget sed parturient tempus. Sed urna magna leo
              neque convallis sit cras auctor. Vestibulum ut sed nunc risus ullamcorper donec.
            </p>
          </li>
          <li className={s.item}>
            <Img src={pImg} alt="Title" />
            <h2>InterActive</h2>
            <p>
              Egestas sagittis quis ultrices iaculis viverra id. Laoreet ipsum vitae lobortis erat
              metus orci facilisi elementum. Sem in eget sed parturient tempus. Sed urna magna leo
              neque convallis sit cras auctor. Vestibulum ut sed nunc risus ullamcorper donec.
            </p>
          </li>
          <li className={s.item}>
            <Img src={pImg} alt="Title" />
            <h2>InterActive</h2>
            <p>
              Egestas sagittis quis ultrices iaculis viverra id. Laoreet ipsum vitae lobortis erat
              metus orci facilisi elementum. Sem in eget sed parturient tempus. Sed urna magna leo
              neque convallis sit cras auctor. Vestibulum ut sed nunc risus ullamcorper donec.
            </p>
          </li>
          <li className={s.item}>
            <Img src={pImg} alt="Title" />
            <h2>InterActive</h2>
            <p>
              Egestas sagittis quis ultrices iaculis viverra id. Laoreet ipsum vitae lobortis erat
              metus orci facilisi elementum. Sem in eget sed parturient tempus. Sed urna magna leo
              neque convallis sit cras auctor. Vestibulum ut sed nunc risus ullamcorper donec.
            </p>
          </li>
          <li className={s.item}>
            <Img src={pImg} alt="Title" />
            <h2>InterActive</h2>
            <p>
              Egestas sagittis quis ultrices iaculis viverra id. Laoreet ipsum vitae lobortis erat
              metus orci facilisi elementum. Sem in eget sed parturient tempus. Sed urna magna leo
              neque convallis sit cras auctor. Vestibulum ut sed nunc risus ullamcorper donec.
            </p>
          </li>
          <li className={s.item}>
            <Img src={pImg} alt="Title" />
            <h2>InterActive</h2>
            <p>
              Egestas sagittis quis ultrices iaculis viverra id. Laoreet ipsum vitae lobortis erat
              metus orci facilisi elementum. Sem in eget sed parturient tempus. Sed urna magna leo
              neque convallis sit cras auctor. Vestibulum ut sed nunc risus ullamcorper donec.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { PortfolioInfoPage };
