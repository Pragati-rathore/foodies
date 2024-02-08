import {  createSlice } from "@reduxjs/toolkit";
const initialState={ 
    isScrolled:true,
    // scrollValue:{
    //     srcollThreshold:""
    // }
    scrollValue:1000
}

const NavBarSlice = createSlice({
    name:"NavBarChng",
    initialState:initialState,
    reducers:{
        handleScroll:(state)=>{
            // const scrollTop = window.scrollY;
            // console.log(scrollTop)
             
            // //  if(scrollTop>1102){
            //     if(scrollTop>1000){
            //     state.isScrolled = false;
            //  }
            //  else{
            //     state.isScrolled = true;
            //  }
            // console.log(actions.payload)
            // const srcollThreshold = 116
            // if(actions.payload>116){

            // }
            const scrollTop = window.scrollY;
            //console.log(scrollTop)
             //console.log(state.scrollValue)
            //  if(scrollTop>1102){
                if(scrollTop > state.scrollValue){
                state.isScrolled = false;
             }
             else{
                state.isScrolled = true;
             }
        },
        setScrollValue: (state, action) => {
            state.scrollValue = action.payload;
        }
        // handleVAlScroll:(state)=>{
            
           
        // }
     

    },
   
    
})

export const { handleScroll,setScrollValue} =NavBarSlice.actions

export default NavBarSlice.reducer;
