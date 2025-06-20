import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  city: string;
  isPublicProfile: boolean;
  roles: string[];
  accessToken?: string;
  refreshToken?: string;
  userId?: string;
  avatar?: string;
}

const initialState: UserState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  city: '',
  isPublicProfile: false,
  roles: [],
  accessToken: undefined,
  refreshToken: undefined,
  userId: undefined,
  avatar: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<UserState>>) {
      return { ...state, ...action.payload };
    },
    resetUser() {
      return initialState;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer; 