import {combineReducers, createStore,applyMiddleware} from "redux";
import userReducer from "./user/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    user: userReducer,
});

const store = createStore(rootReducer, {},applyMiddleware(thunk));
export default store