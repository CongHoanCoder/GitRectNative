import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
import dataReducer from "./dataReducer";


const rootReducer = combineReducers({
    bank: bankReducer,
    dataReducer: dataReducer
})

export default rootReducer;