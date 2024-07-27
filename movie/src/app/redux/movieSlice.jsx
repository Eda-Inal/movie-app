import { createSlice } from '@reduxjs/toolkit'

export const movieSlice= createSlice({
name:'movie',
initialState:{
    isSidebar:true,
},
reducers : {
    // open and close sidebar function
setSidebar:(state,action) => {
    state.isSidebar = action.payload
}
}
})
export const {setSidebar} = movieSlice.actions
export default movieSlice.reducer