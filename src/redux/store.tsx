import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducer';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "pokemons",
    "regions",
  ],
};

const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, appReducer);

const composeEnhancers =  compose;
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
  
  const persistor = persistStore(store);
  
  export { store, persistor };