import { MenuProps } from 'antd';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { LuShoppingCart } from 'react-icons/lu';
import { MdWorkOutline } from 'react-icons/md';
import { RiCustomerService2Line } from 'react-icons/ri';
import { SlCallIn } from 'react-icons/sl';

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
    key: '/admin/slider',
    label: 'Реклама',
    icon: <HiOutlineSpeakerphone />,
  },
  {
    key: '/admin/support',
    label: 'Заявки',
    icon: <SlCallIn />,
  },
  {
    key: '/admin/order',
    label: 'Заказы',
    icon: <LuShoppingCart />,
  },
];
