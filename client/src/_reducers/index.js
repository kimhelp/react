import { combineReducers } from "redux";
import user from "./user_reducer";

//state 합치기
const rootReducer = combineReducers({
  user,
});
export default rootReducer;
