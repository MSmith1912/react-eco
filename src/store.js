import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware } from './middleware';
import reducer from './reducer';

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(promiseMiddleware);
    } else {
        return applyMiddleware(promiseMiddleware)
    }
};
// creates the store using "reducer", reducer exports the "quiz" reducer
export const store = createStore(reducer, composeWithDevTools(getMiddleware()));