import React from 'react';
import { useDispatch } from 'react-redux';
import { actions as auth } from 'src/store/auth/auth.slice';
import { actions as shareds } from 'src/store/shared/shared.slice';

import { bindActionCreators } from '@reduxjs/toolkit';

const rootActions = { ...shareds, ...auth };

export const useActions = () => {
  const dispatch = useDispatch();
  return React.useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
