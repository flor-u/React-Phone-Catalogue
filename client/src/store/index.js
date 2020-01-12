import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { 
    phones:[] ,
    selectedPhone:null
};
export const store = createStore(reducer, initialState);
