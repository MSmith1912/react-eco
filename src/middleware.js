
import { } from './actions/actionTypes';

const promiseMiddleware = store => next => action => {
    // Do Nothing for now.//
    next(action);
};

export { promiseMiddleware }