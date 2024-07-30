import { createSlice } from '@reduxjs/toolkit'

export const movieSlice= createSlice({
name:'movie',
initialState:{
    isSidebar:false,
    isDark:true

},
reducers : {
    // open and close sidebar function
setSidebar:(state,action) => {
    state.isSidebar = action.payload
},
setIsDark : (state) => {
    state.isDark = !state.isDark
}

}
})
export const {setSidebar,setIsDark} = movieSlice.actions
export default movieSlice.reducer