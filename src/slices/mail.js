import { createSlice } from '@reduxjs/toolkit';
import { mailApi } from '../__fake-api__/mail-api';
import { objFromArray } from '../utils/obj-from-array';

const initialState = {
  emails: {
    byId: {},
    allIds: []
  },
  labels: [],
  isSidebarOpen: true,
  isComposeOpen: false
};

const slice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    getLabels(state, action) {
      state.labels = action.payload;
    },
    getEmails(state, action) {
      const emails = action.payload;

      state.emails.byId = objFromArray(emails);
      state.emails.allIds = Object.keys(state.emails.byId);
    },
    getEmail(state, action) {
      const email = action.payload;

      state.emails.byId[email.id] = email;

      if (!state.emails.allIds.includes(email.id)) {
        state.emails.allIds.push(email.id);
      }
    },
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
    openCompose(state) {
      state.isComposeOpen = true;
    },
    closeCompose(state) {
      state.isComposeOpen = false;
    }
  }
});

export const { reducer } = slice;

export const getLabels = () => async (dispatch) => {
  const data = await mailApi.getLabels();

  dispatch(slice.actions.getLabels(data));
};

export const getEmails = ({ label }) => async (dispatch) => {
  const data = await mailApi.getEmails({ label });

  dispatch(slice.actions.getEmails(data));
};

export const getEmail = (emailId) => async (dispatch) => {
  const data = await mailApi.getEmail(emailId);

  dispatch(slice.actions.getEmail(data));
};

export const openSidebar = () => async (dispatch) => {
  dispatch(slice.actions.openSidebar());
};

export const closeSidebar = () => async (dispatch) => {
  dispatch(slice.actions.closeSidebar());
};

export const openComposer = () => async (dispatch) => {
  dispatch(slice.actions.openCompose());
};

export const closeComposer = () => async (dispatch) => {
  dispatch(slice.actions.closeCompose());
};
