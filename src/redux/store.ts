import { configureStore } from '@reduxjs/toolkit';
import temperatureReducer from './child/temperature';

export const store = configureStore({
	reducer: {
		temperature: temperatureReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;
