import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  user: User
  authToken: string,
  isGuest: boolean
}

interface User {
  fullName: string;
  email: string;
  phone: string;
  displayPicture: string,

}

const initialState: UserState = {
  isLoggedIn: false,
  user: {
    fullName: '',
    email: '',
    displayPicture: '',
    phone: ""
  },
  authToken: '',
  isGuest: true

};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateUserState: (state, action: PayloadAction<UserState>) => {

      state.isLoggedIn = action.payload?.isLoggedIn;
      state.user = action.payload?.user;
      state.authToken = action.payload?.authToken;
    },

    logoutUser: state => {
      state.isLoggedIn = false;
      state.user = {
        fullName: '',
        email: '',
        displayPicture: '',
        phone: ""
      },
        state.authToken = '';
      state.isGuest = true
    },
    showAuthScreen: (state, action: PayloadAction<boolean>) => {
      state.isGuest = false;
      state.isLoggedIn = false

    },


    updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },

    updateProfilePicture: (state, action: PayloadAction<string>) => {

      if (state?.user) {
        state.user.displayPicture = action.payload;
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  updateUserState,
  logoutUser,
  updateProfilePicture,
  showAuthScreen,
} = userSlice.actions;

export default userSlice.reducer;
