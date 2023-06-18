import { combineReducers } from "redux";
import { WindowSize } from "./Reducer/Navigation/WindowSize";
import { AlertsRed, AlertsRedEmpty } from "./Reducer/Alerts/AlertsRed";

export const AllReducer = combineReducers({
    windowWidth:WindowSize,
    changeValue:AlertsRed,
    changeValueEmpty:AlertsRedEmpty
})