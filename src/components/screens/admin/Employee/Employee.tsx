import { Button } from 'antd';
import React from 'react';
import { Head } from 'src/components/shared';
import { useActions } from 'src/hooks';

import { EmployeeForm } from './form/EmployeeForm';
import { EmployeeTable } from './table/EmployeeTable';

const Employee: React.FC = () => {
  const { toggleModal } = useActions();
  return (
    <>
      <Head
        title="Сотрудники"
        childs={[
          <Button type="primary" onClick={() => toggleModal()}>
            Добавить
          </Button>,
        ]}
      />
      <EmployeeForm />
      <EmployeeTable />
    </>
  );
};

export { Employee };
