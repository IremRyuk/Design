import { combineReducers } from "redux";
import { WindowSize } from "./Reducer/Navigation/WindowSize";
import { SwiperValue } from "./Reducer/SwiperInitialValue/SwiperValue";

export const AllReducer = combineReducers({
    windowWidth:WindowSize,
    changeValue:SwiperValue
})