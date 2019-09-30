import { combineReducers } from "redux";
import UserReducers from "../reducers/users";

export default combineReducers({
  users: UserReducers
});
