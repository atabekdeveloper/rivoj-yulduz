import React from 'react';
import { Head } from 'src/components/shared';

import { SupportForm } from './form/SupportForm';
import { SupportTable } from './table/SupportTable';

const Support: React.FC = () => (
  <>
    <Head title="Заявки" />
    <SupportForm />
    <SupportTable />
  </>
);

export { Support };
