import { notification } from 'antd';
import clsx from 'clsx';
import React from 'react';
import logo from 'src/assets/images/logo.svg';
import billboard from 'src/assets/images/point/billboard.png';
import blue from 'src/assets/images/point/blue.svg';
import building from 'src/assets/images/point/building.png';
import bus from 'src/assets/images/point/bus-station.png';
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
            center: [42.450868, 59.612779],
            zoom: 15,
          }}
          className={s.map}
        >
          <FullscreenControl />
          <SearchControl />
          <ZoomControl />
          <Placemark
            geometry={[42.450868, 59.612779]}
            options={{
              draggable: false,
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
                draggable: false,
                iconLayout: 'default#image',
                iconImageHref: clsx(
                  point.point_type.slug === 'ekran' && blue,
                  point.point_type.slug === 'bilbord' && billboard,
                  point.point_type.slug === 'brandmaueri' && building,
                  point.point_type.slug === 'ostanovki' && bus,
                ),
                iconImageSize: [32, 32],
                iconImageOffset: [-16, -16],
              }}
              onClick={() => {
                notification.info({
                  message: `${point.point_type.name}: ${point.title}`,
                  placement: 'top',
                });
              }}
            />
          ))}
        </Map>
      </div>
    </div>
  );
};

export { PointPage };
