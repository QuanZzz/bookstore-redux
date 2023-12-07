import { combineReducers } from 'redux';
import bookReducer from '@/reducers/reducers';

const rootReducer = combineReducers({
    books: bookReducer,
});

export default rootReducer;
