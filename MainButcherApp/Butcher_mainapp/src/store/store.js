import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { persistReducer, persistStore, } from 'redux-persist'
import  log_datareducer from '../../src/screens/LoginScreen/reducer';
import register_datareducer from '../../src//screens/RegisterScreen/reducer';
import storage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk'
import logger from 'redux-logger'



// create store
// create database
// reducer combine
// initialization of store

const rootReducer = combineReducers({
  log_datareducer,
  register_datareducer
})

const rootPersistConfig = {
  key: 'root',
  storage,
//   stateReconciler: hardSet
}

const store = createStore(
  persistReducer(rootPersistConfig, rootReducer),
  compose(applyMiddleware(thunk, logger))
)

const persistor = persistStore(store)

export { store, persistor }