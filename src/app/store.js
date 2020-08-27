import { configureStore } from '@reduxjs/toolkit';
import { currencies, baseCurrency } from './reducers';

export default configureStore({
  reducer: {
    currencies,
    baseCurrency,
  }
});
