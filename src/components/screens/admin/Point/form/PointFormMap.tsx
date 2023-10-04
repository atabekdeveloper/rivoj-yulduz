import React from 'react';
import marker from 'src/assets/images/point/map-marker.png';
import { useActions, useSelectors } from 'src/hooks';

import {
  FullscreenControl,
  Map,
  Placemark,
  SearchControl,
  ZoomControl,
} from '@pbe/react-yandex-maps';

import s from './form.module.scss';

const PointFormMap: React.FC = () => {
  const { location } = useSelectors();
  const { setLocation } = useActions();
  const onMapClick = async (event: any) => {
    const map = event.get('coords');
    setLocation(map);
  };
  const handlePlacemarkDrag = (e: any) => {
    const newCoords = e.get('target').geometry.getCoordinates();
    setLocation(newCoords);
  };
  return (
    <Map
      state={{
        center: location.length ? location : [42.474037, 59.617937],
        zoom: 15,
      }}
      className={s.map}
      onClick={onMapClick}
    >
      <FullscreenControl />
      <SearchControl />
      <ZoomControl />
      <Placemark
        geometry={location}
        options={{
          draggable: true,
          iconLayout: 'default#image',
          iconImageHref: marker,
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16],
          visible: !!location[0],
        }}
        onDragEnd={handlePlacemarkDrag}
      />
    </Map>
  );
};

export { PointFormMap };
