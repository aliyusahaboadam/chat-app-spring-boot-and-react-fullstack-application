import initialState from "./initialState";
import * as actionTypes from './actionTypes';
import { combineReducers} from 'redux';


export default function messageReducer (state = initialState, action) {
    
    switch(action.type) {
         case actionTypes.messageType.ADD_MESSAGES: {
            return {

                messages: [...state.messages, action.payload]
            }
         }

         default:
            return state;
      }
}

export const rootReducer = combineReducers({
    messages: messageReducer
});