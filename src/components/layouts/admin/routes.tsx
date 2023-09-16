import { MenuProps } from 'antd';
import { AiOutlineHome } from 'react-icons/ai';

export const routes: MenuProps['items'] = [
  {
    key: '/admin',
    label: 'Главная',
    icon: <AiOutlineHome />,
  },
];
