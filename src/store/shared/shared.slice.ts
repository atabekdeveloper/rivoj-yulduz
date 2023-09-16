import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISharedType } from './shared.types';

const initialState: ISharedType = {
  id: 0,
  isModal: false,
  isModal2: false,
  isNavbar: false,
  isDrawer: true,
  isCollapsed: false,
  isMenu: false,
  paramsItem: null,
  tinyContent: '',
};

const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    toggleDrawer(state) {
      state.isDrawer = !state.isDrawer;
    },
    toggleModal(state) {
      state.isModal = !state.isModal;
    },
    toggleModal2(state) {
      state.isModal2 = !state.isModal2;
    },
    toggleNavbar(state) {
      state.isNavbar = !state.isNavbar;
    },
    toggleMenu(state) {
      state.isMenu = !state.isMenu;
    },
    toggleMenuCollapsed(state) {
      state.isCollapsed = !state.isCollapsed;
    },
    setId(state, { payload }: PayloadAction<number>) {
      state.id = payload;
    },
    setParamsItem(state, { payload }: PayloadAction<any>) {
      state.paramsItem = payload;
    },
    setParamsItemForm(state, { payload }: PayloadAction<any>) {
      state.paramsItem = payload;
      state.isModal = true;
    },
    setTinyContent(state, { payload }: PayloadAction<string>) {
      state.tinyContent = payload;
    },
  },
});
export const { reducer, actions } = sharedSlice;
