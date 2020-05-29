import { combineReducers } from "redux";
import movieHome from "./movieHome";
import warning from "./warning";
import movieSearch from "./movieSearch";

export default combineReducers({ 
    movieHome,
    warning,
    movieSearch
});