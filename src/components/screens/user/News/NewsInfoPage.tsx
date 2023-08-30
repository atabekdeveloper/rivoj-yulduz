import React from 'react';
import Img from 'react-cool-img';
import { useParams } from 'react-router-dom';
import newsImg from 'src/assets/images/news/img.jpg';
import { useResponsive } from 'src/hooks';

import { NewItems } from './NewItems';
import { NewsSliderItems } from './NewsSliderItems';

import s from './news.module.scss';

const NewsInfoPage: React.FC = () => {
  const { id } = useParams();
  const { isMobile } = useResponsive(770);
  return (
    <div className={s.news}>
      <div className="container">
        <h1 className={s.infoTitle}>Другие новости</h1>
        <div className={s.info}>
          {isMobile ? <NewsSliderItems /> : <NewItems />}
          <div className={s.content}>
            <Img src={newsImg} alt="Title" />
            <p>
              <h1>Новости 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Commodo aliquam et fermentum et molestie
                purus morbi amet. Lorem fringilla cras scelerisque massa quam morbi. Habitant
                consectetur nisl tincidunt fermentum leo dignissim in nunc urna. Id sit tincidunt et
                lobortis vitae consequat quam viverra. Varius integer ut libero nisi massa. Diam
                vulputate donec mi eros curabitur odio potenti mi lobortis. Nulla et tempus aliquam
                amet velit. Ultrices mauris in feugiat habitasse est sed. Porta sed in dui fringilla
                arcu congue senectus eget. Tempus netus facilisi eu justo eu ultrices adipiscing. At
                felis mattis pellentesque tellus nisl arcu ultricies volutpat. Nisi platea sed
                mauris venenatis ornare augue. Nunc risus in dictum lacus lorem. Consectetur arcu
                lectus amet nunc eu sed tincidunt velit. Elit phasellus feugiat dignissim sed
                consectetur justo. Ante morbi semper eget tristique ultrices fames tellus commodo
                proin. Quisque hac vel facilisis bibendum bibendum dapibus est. Convallis interdum
                mus vitae vel diam diam eleifend praesent ut. Mi arcu mattis habitant tincidunt
                blandit placerat. Ipsum vitae pellentesque montes nascetur. Faucibus ultricies nec
                euismod id maecenas tortor. Vitae viverra ultrices dolor tempor eu sit mi mauris mi.
                Eget turpis justo amet nibh vestibulum. Nulla massa non arcu gravida malesuada
                cursus fringilla tincidunt augue. Neque tincidunt cras quam semper neque purus.
                Purus at ac ipsum ut hendrerit aliquam risus. Habitant sed proin ultrices laoreet
                hac erat varius. Pretium suscipit quis convallis platea commodo ut ornare. Eu neque
                gravida quisque ultricies dolor augue vitae quam amet. Adipiscing elementum vel
                nulla maecenas sapien platea neque purus eu. Feugiat auctor adipiscing enim tellus
                odio turpis adipiscing. Lobortis laoreet nibh facilisi odio massa. Bibendum amet
                suspendisse morbi netus eget eget. Aliquam amet arcu amet suspendisse euismod
                placerat. At aliquam eget varius iaculis purus nibh egestas et enim. Amet at tempor
                risus non volutpat. Nibh purus purus dolor volutpat tempus nec. Diam porttitor
                interdum hendrerit faucibus amet est lacinia. Lacus commodo nunc dignissim ut
                volutpat morbi. Risus nulla tempus quisque tellus sed sit nibh. Vitae viverra
                ultrices dolor tempor eu sit mi mauris mi. Eget turpis justo amet nibh vestibulum.
                Nulla massa non arcu gravida malesuada cursus fringilla tincidunt augue. Neque
                tincidunt cras quam semper neque purus. Purus at ac ipsum ut hendrerit aliquam
                risus. Habitant sed proin ultrices laoreet hac erat varius. Pretium suscipit quis
                convallis platea commodo ut ornare. Eu neque gravida quisque ultricies dolor augue
                vitae quam amet. Adipiscing elementum vel nulla maecenas sapien platea neque purus
                eu.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewsInfoPage };
