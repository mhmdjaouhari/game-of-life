import { createStore } from "redux";
import { gridReducer } from "./gridReducer";

export const store = createStore(gridReducer);
