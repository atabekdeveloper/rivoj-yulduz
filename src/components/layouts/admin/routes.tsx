import { MenuProps } from 'antd';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';

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
];
