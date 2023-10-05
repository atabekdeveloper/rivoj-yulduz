import React from 'react';
import Img from 'react-cool-img';
import { useGetUserEmployeesQuery } from 'src/services';

import s from './about.module.scss';

const AboutEmployers: React.FC = () => {
  const { data: employees } = useGetUserEmployeesQuery();
  return (
    <ul className={s.items}>
      {employees?.data.map((employee) => (
        <li className={s.item} key={employee.id}>
          <Img src={employee.image?.image_url} alt="User" />
          <div className={s.info}>
            <h3>{employee.name}</h3>
            <span>{employee.position}</span>
          </div>
          <p className={s.phone}>{employee.phone}</p>
        </li>
      ))}
    </ul>
  );
};

export { AboutEmployers };
