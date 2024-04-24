import { createSlice } from '@reduxjs/toolkit';
import { calendarApi } from '../__fake-api__/calendar-api';

const initialState = {
  events: []
};

const slice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    getEvents(state, action) {
      state.events = action.payload;
    },
    createEvent(state, action) {
      state.events.push(action.payload);
    },
    updateEvent(state, action) {
      const event = action.payload;

      state.events = state.events.map((_event) => {
        if (_event.id === event.id) {
          return event;
        }

        return _event;
      });
    },
    deleteEvent(state, action) {
      state.events = state.events.filter((event) => event.id !== action.payload);
    }
  }
});

export const { reducer } = slice;

export const getEvents = () => async (dispatch) => {
  const data = await calendarApi.getEvents();

  dispatch(slice.actions.getEvents(data));
};

export const createEvent = (createData) => async (dispatch) => {
  const data = await calendarApi.createEvent(createData);

  dispatch(slice.actions.createEvent(data));
};

export const updateEvent = (eventId, update) => async (dispatch) => {
  const data = await calendarApi.updateEvent({
    eventId,
    update
  });

  dispatch(slice.actions.updateEvent(data));
};

export const deleteEvent = (eventId) => async (dispatch) => {
  await calendarApi.deleteEvent(eventId);

  dispatch(slice.actions.deleteEvent(eventId));
};
