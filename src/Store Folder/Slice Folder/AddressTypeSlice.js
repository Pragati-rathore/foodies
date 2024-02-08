import {  createSlice } from "@reduxjs/toolkit";
const initialState={ 
    
}

const AddressTypeSlice = createSlice({
    name:" AddressTypeShowSlice",
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
        // handleVAlScroll:(state)=>{
            
           
        // }
     

    },
   
    
})

export const { handleScroll} =AddressTypeSlice.actions

export default AddressTypeSlice.reducer;
