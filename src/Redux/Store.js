import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './Reducers/RootReducer';
import UserSaga from './Saga/UserSaga'
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const store  = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});
sagaMiddleware.run(UserSaga);


export default store;