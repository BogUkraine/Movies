import { combineReducers } from "redux";
import movie from "./movie";
import warning from "./warning";

export default combineReducers({ movie, warning });