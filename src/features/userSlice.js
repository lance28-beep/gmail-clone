import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },

    logout: (state) => {
      state.user = null
    },
  },
})

//use for dispatching
export const { login, logout } = userSlice.actions
//use for state distrabution
export const selectUser = (state) => state.user.user
export default userSlice.reducer
