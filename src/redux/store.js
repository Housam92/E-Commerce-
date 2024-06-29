import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
 
});

export default store;

// composeWithDevTools to see actions and states on chrome extension Redux dev tools 

//meddleware for dealing with ascync and await ( to avoid the errors)

// rootReducer we put all reducers inside it 
