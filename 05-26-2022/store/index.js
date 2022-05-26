
import {  configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice'
import authSliceReducer from './Authslice';




  
  const store = configureStore({
    reducer: { counter: counterReducer, auth: authSliceReducer },
  });




export default store;

