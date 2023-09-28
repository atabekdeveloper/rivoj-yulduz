/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Input, Space } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import clsx from 'clsx';
import React from 'react';
import Img from 'react-cool-img';
import click from 'src/assets/images/order/click.svg';
import payme from 'src/assets/images/order/payme.svg';
import { UiButton } from 'src/components/ui';
import { useSelectors } from 'src/hooks';
import { usePostOrderMutation } from 'src/services';
import { TPostOrderChange } from 'src/services/order/order.types';
import { formatPrice2, formatStringJoin, formMessage } from 'src/utils';

import s from './order.module.scss';

const payItems = [
  { id: 1, img: click },
  { id: 2, img: payme },
];

const OrderPage: React.FC = () => {
  const [paymentId, setPaymentId] = React.useState(0);
  const [submittable, setSubmittable] = React.useState(false);
  const { paramsItem } = useSelectors();
  const [form] = Form.useForm();
  const formValues = Form.useWatch([], form);

  const { mutate, data: order, isSuccess } = usePostOrderMutation();

  const onFinish = (values: TPostOrderChange) => {
    mutate({
      ...values,
      width: paramsItem.width,
      height: paramsItem.height,
      quantity: paramsItem.count,
      service_slug: paramsItem.service_slug,
      payment_id: paymentId,
      phone: formatStringJoin(values.phone),
    });
  };

  const onPayClick = () => {
    form.submit();
    if (!submittable) window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => setSubmittable(true),
      () => setSubmittable(false),
    );
  }, [form, formValues]);
  React.useEffect(() => {
    if (isSuccess) window.location.replace(order.data.payment_url);
  }, [isSuccess]);
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
                информация.
              </p>
            </div>
            <Form
              form={form}
              name="User Contact"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
              size="large"
            >
              <Form.Item name="name" rules={[{ required: true, message: formMessage('ФИО..') }]}>
                <Input placeholder="ФИО.." />
              </Form.Item>
              <Form.Item name="phone" rules={[{ required: true, message: formMessage('Телефон') }]}>
                <MaskedInput inputMode="tel" mask="+{998} 00 000 00 00" />
              </Form.Item>
              <Form.Item
                name="comment"
                rules={[{ required: true, message: formMessage('Комментарии') }]}
              >
                <Input.TextArea placeholder="Комментарии" />
              </Form.Item>
            </Form>
          </div>
          <h1 className={s.orderTitle}>О заказе</h1>
          <div className={s.info}>
            <div className={s.title}>
              <h2>{`${paramsItem?.category || '-'} /`}</h2>
              <p>{`${paramsItem?.service || '-'}`}</p>
            </div>
            <div className={s.size}>
              <h3>Размеры</h3>
              <ul className={s.items}>
                <li className={s.item}>
                  <span>высота</span>
                  <span>{`${paramsItem?.height || '-'} м`}</span>
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
              <h1>{formatPrice2(paramsItem?.quantity, 'uzs')}</h1>
            </div>
            <div className={s.bottom}>
              <div className={s.btns}>
                <p>Выберите платёжную систему</p>
                <Space wrap>
                  {payItems.map((item) => (
                    <button
                      key={item.id}
                      className={clsx(s.btn, item.id === paymentId && s.active)}
                      onClick={() => setPaymentId(item.id)}
                    >
                      <Img src={item.img} alt={item.id} />
                    </button>
                  ))}
                </Space>
              </div>
              <UiButton
                color="pink"
                type="primary"
                text="Оплатить"
                disabled={!paymentId}
                onClick={onPayClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OrderPage };
