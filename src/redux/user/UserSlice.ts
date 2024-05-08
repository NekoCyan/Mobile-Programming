import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
	username: string;
}

const UserSlice = createSlice({
	name: 'User',
	initialState: {
		username: '',
	} as UserState,
	reducers: {
		setUsername: (state, action: PayloadAction<UserState['username']>) => {
			state.username = action.payload;
		},
	},
});

export const UserAction = UserSlice.actions;
export default UserSlice.reducer;
