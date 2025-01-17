import { createStore, combineReducers } from 'redux'

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import CalculatorReducer from './Calculator/Calculator.reducer'
import ProductsReducer from './Products/Products.reducer'

const rootReducer = combineReducers({
  calculator: CalculatorReducer,
  products: ProductsReducer
})

const persistedReducer = persistReducer({
  key: rootReducer,
  storage
}, rootReducer)

export const store = createStore(persistedReducer)

export const persistedStore = persistStore(store) 