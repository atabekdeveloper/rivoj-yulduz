/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Empty } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UiCollapse } from 'src/components/ui';
import { useGetUserTypeItemQuery } from 'src/services';

import s from './calculation.module.scss';

const CalculationMenu: React.FC = () => {
  const { slugType, slugService } = useParams();
  const { data: type, isSuccess } = useGetUserTypeItemQuery(String(slugType));
  const navigate = useNavigate();
  const items = type?.data.categories.map((category, cIndex) => ({
    key: category.slug,
    label: `${cIndex + 1}. ${category.title}`,
    style: { background: '#1A509D' },
    children: (
      <ul className={s.menuLayout}>
        {category.services.map((service, sIndex) => (
          <li
            key={service.id}
            className={clsx(s.item, slugService === service.slug && s.active)}
            onClick={() => navigate(`/service/${slugType}/${service.slug}`)}
          >
            {`${cIndex + 1}.${sIndex + 1} ${service.title}`}
          </li>
        ))}
      </ul>
    ),
  }));
  React.useEffect(() => {
    if (isSuccess) {
      navigate(`/service/${slugType}/${type.data.categories[0]?.services[0]?.slug || '1'}`);
    }
  }, [isSuccess]);
  if (!items?.length) {
    return (
      <div className={s.empty}>
        <Empty description="Нет услуги" />
      </div>
    );
  }
  return <UiCollapse colorHeading="#fff" expandIconPosition="end" accordion items={items} />;
};

export { CalculationMenu };
