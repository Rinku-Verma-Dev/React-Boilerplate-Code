import { combineReducers } from "redux";
import counter from "../slice/counterSlice";
import abcd from "../slice/abcdSlice";

export default combineReducers({
  counter,
  abcd,
});
