import { MenuProps } from 'antd';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { LuShoppingCart } from 'react-icons/lu';
import { MdWorkOutline } from 'react-icons/md';
import { RiCustomerService2Line } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';

export const routes: MenuProps['items'] = [
  {
    key: '/admin',
    label: 'Главная',
    icon: <AiOutlineHome />,
  },
  {
    key: '/admin/type',
    label: 'Типы',
    icon: <AiOutlineSetting />,
  },
  {
    key: '/admin/category',
    label: 'Категория',
    icon: <BiCategory />,
  },
  {
    key: '/admin/service',
    label: 'Сервисы',
    icon: <RiCustomerService2Line />,
  },
  {
    key: '/admin/portfolio',
    label: 'Портфолио',
    icon: <MdWorkOutline />,
  },
  {
    key: '/admin/delivery-method',
    label: 'Доставщик метод',
    icon: <TbTruckDelivery />,
  },
  {
    key: '/admin/order',
    label: 'Заказы',
    icon: <LuShoppingCart />,
  },
];
