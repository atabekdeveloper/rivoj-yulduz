import { notification } from 'antd';
import React from 'react';
import logo from 'src/assets/images/logo.svg';
import blue from 'src/assets/images/point/blue.svg';
import pink from 'src/assets/images/point/pink.svg';
import { useGetUserPointsQuery } from 'src/services';

import {
  FullscreenControl,
  Map,
  Placemark,
  SearchControl,
  ZoomControl,
} from '@pbe/react-yandex-maps';

import s from './point.module.scss';

const PointPage: React.FC = () => {
  const { data: points } = useGetUserPointsQuery();
  return (
    <div className={s.point}>
      <div className="container">
        <h1 className="title">Аренда мест для рекламы</h1>
        <Map
          state={{
            center: [42.4600059, 59.6153464],
            zoom: 15,
          }}
          className={s.map}
        >
          <FullscreenControl />
          <SearchControl />
          <ZoomControl />
          <Placemark
            geometry={[42.4600059, 59.6153464]}
            options={{
              draggable: true,
              iconLayout: 'default#image',
              iconImageHref: logo,
              iconImageSize: [60, 60],
              iconImageOffset: [-30, -30],
            }}
          />
          {points?.data.map((point) => (
            <Placemark
              key={point.title}
              geometry={[point.lat, point.lng]}
              options={{
                draggable: true,
                iconLayout: 'default#image',
                iconImageHref: point.point_type.slug === 'ekran' ? pink : blue,
                iconImageSize: [32, 32],
                iconImageOffset: [-16, -16],
              }}
              onClick={() => notification.info({ message: point.title, placement: 'top' })}
            />
          ))}
        </Map>
      </div>
    </div>
  );
};

export { PointPage };
