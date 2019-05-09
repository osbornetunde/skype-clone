import { EDIT_MESSAGE, DELETE_MESSAGE } from "../constants/action-types";


export default function setMessageId(state="null", action) {
    switch (action.type){
        case EDIT_MESSAGE:
            return action.payload.messageId;
        case DELETE_MESSAGE:
            return action.payload.message_Id;
        
        default:
            return state;
    }
}