import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'tab',
    initialState: {
      value: {
        tab:"",
        subtab:"",
      },
    },
    reducers: {
        updateTab:(state, action) =>{
            state.value.tab = action.payload;
        },
        updateSubTab:(state, action) =>{
          state.value.subtab = action.payload;
        },
      
    },
  },

  )


  export const { updateTab, updateSubTab} = reduxSlice.actions

  export default reduxSlice.reducer