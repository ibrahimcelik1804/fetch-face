import { USERS_URL } from '../../service/url';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../service/verbs';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (values, { rejectWithValue }) => {
    try {
      const response = await getRequest(USERS_URL, values);
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  },
);
