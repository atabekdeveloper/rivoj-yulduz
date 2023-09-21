import { Input, Space } from 'antd';
import clsx from 'clsx';
import React from 'react';
import Img from 'react-cool-img';
import click from 'src/assets/images/order/click.svg';
import payme from 'src/assets/images/order/payme.svg';
import uzum from 'src/assets/images/order/uzum.svg';
import { UiButton } from 'src/components/ui';
import { useSelectors } from 'src/hooks';
import { formatPrice } from 'src/utils';

import s from './order.module.scss';

const payItems = [
  { type: 'click', img: click },
  { type: 'payme', img: payme },
  { type: 'uzum', img: uzum },
];

const OrderPage: React.FC = () => {
  const [payType, setPayType] = React.useState('');
  const { paramsItem } = useSelectors();
  return (
    <div className={s.order}>
      <div className="container">
        <div className={s.body}>
          <h1 className="title">Заказать услугу</h1>
          <div className={s.contact}>
            <div className={s.info}>
              <h1>Контактные данные</h1>
              <p>
                Чтобы связаться с вами и уточнить детали, нам нужна ваша корректная контактная
                информация
              </p>
            </div>
            <div className={s.inputs}>
              <Input placeholder="Имя" size="large" />
              <Input placeholder="Телефон" size="large" />
              <Input.TextArea placeholder="Комментарии" size="large" />
            </div>
          </div>
          <h1 className={s.orderTitle}>О заказе</h1>
          <div className={s.info}>
            <div className={s.title}>
              <h2>Подкатегория 1 /</h2>
              <p>из деревянного каркаса баннер</p>
            </div>
            <div className={s.size}>
              <h3>Размеры</h3>
              <ul className={s.items}>
                <li className={s.item}>
                  <span>высота</span>
                  <span>{`${paramsItem?.heigth || '-'} м`}</span>
                </li>
                <li className={s.item}>
                  <span>ширина</span>
                  <span>{`${paramsItem?.width || '-'} м`}</span>
                </li>
                <li className={s.item}>
                  <span>толшина</span>
                  <span>-</span>
                </li>
                <li className={s.item}>
                  <span>штук</span>
                  <span>{`${paramsItem?.count || '-'}`}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.pay}>
            <div className={s.top}>
              <h3>Обшая сумма:</h3>
              <h1>{formatPrice(paramsItem?.quantity, 'uzs')}</h1>
            </div>
            <div className={s.bottom}>
              <div className={s.btns}>
                <p>Выберите платёжную систему</p>
                <Space wrap>
                  {payItems.map((item) => (
                    <button
                      key={item.type}
                      className={clsx(s.btn, item.type === payType && s.active)}
                      onClick={() => setPayType(item.type)}
                    >
                      <Img src={item.img} alt={item.type} />
                    </button>
                  ))}
                </Space>
              </div>
              <UiButton color="pink" type="primary" text="Оплатить" disabled={!payType} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OrderPage };
