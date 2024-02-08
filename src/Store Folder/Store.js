import { configureStore } from '@reduxjs/toolkit';
import NavBarSlice from "./Slice Folder/NavBarSlice"
import AddressTypeSlice from './Slice Folder/AddressTypeSlice';
import UserloginSlice from './Slice Folder/UserloginSlice';
import cartSlice from './Slice Folder/cartSlice';

const Store =configureStore({
  reducer:{
    NavBarChng :NavBarSlice,
    AddressTypeShowSlice:AddressTypeSlice,
    Userloginchange:UserloginSlice,
    cart: cartSlice,
  }
})
export default Store;