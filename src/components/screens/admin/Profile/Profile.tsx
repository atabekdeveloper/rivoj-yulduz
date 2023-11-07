import React from 'react';
import { Head } from 'src/components/shared';

import { ProfileForm } from './form/ProfileForm';
import { ProfileTable } from './table/ProfileTable';

const Profile: React.FC = () => (
  <>
    <Head title="Профиль" />
    <ProfileForm />
    <ProfileTable />
  </>
);

export { Profile };
