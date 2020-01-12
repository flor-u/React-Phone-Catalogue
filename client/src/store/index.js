import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { 
    phones:[] 
};
export const store = createStore(reducer, initialState);
