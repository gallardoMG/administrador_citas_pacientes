import { combineReducers } from 'redux'
import { viewReducer } from "./viewReducer";
import { currentUserReducer } from "./currentUserReducer";
import { currentInfoSchedule } from "./currentUserReducer";

const rootReducer = combineReducers({ viewReducer, currentUserReducer, currentInfoSchedule });
export default rootReducer;