/* eslint-disable object-curly-newline */
import clsx from 'clsx';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

import { TUiButton } from './button.types';

import s from './button.module.scss';

const UiButton: React.FC<TUiButton> = ({ type, text, onClick, color, icon }) => (
  <button className={clsx(s.btn, s[type], s[color])} onClick={onClick}>
    <span>{text}</span>
    {icon && <AiOutlineRight />}
  </button>
);

export { UiButton };
