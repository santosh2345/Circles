import { configureStore } from '@reduxjs/toolkit'

import tabReducer from './reduxSlice';



export default configureStore({
  reducer: {
    tab: tabReducer,
   

  },
})

