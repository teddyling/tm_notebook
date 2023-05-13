import { combineReducers } from "redux";
import cellReducer from "./cellsReducers";
import bundleReducer from "./bundlesReducer";

const reducers = combineReducers({
  cells: cellReducer,
  bundle: bundleReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
