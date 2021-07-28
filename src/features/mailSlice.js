import { createSlice } from '@reduxjs/toolkit'
export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageisOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload
    },

    openSendMessage: (state) => {
      state.sendMessageisOpen = true
    },
    closeSendMessage: (state) => {
      state.sendMessageisOpen = false
    },
  },
})


//use for dispatching
export const { selectMail, openSendMessage, closeSendMessage } =
  mailSlice.actions
//use for state distrabution 
export const selectOpenMail = (state) => state.mail.selectedMail
export const selectMessageIsOpen = (state) => state.mail.sendMessageisOpen
export default mailSlice.reducer
