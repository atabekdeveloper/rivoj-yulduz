import React from 'react';
import { Head } from 'src/components/shared';

import { TypeTable } from './table/TypeTable';

const Type: React.FC = () => (
  <>
    <Head title="Типы" />
    <TypeTable />
  </>
);

export { Type };
