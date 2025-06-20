import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../actions/usersActions';

const initialState = {
  users: [],
  pending: false,
  error: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.pending = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      });
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;
