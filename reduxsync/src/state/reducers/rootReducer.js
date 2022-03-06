import DataReducer from './dataReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({DataReducer: DataReducer});
export default rootReducer;
