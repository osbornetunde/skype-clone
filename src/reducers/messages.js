import { getMessages } from "../static-data.js";
import _ from "lodash";
import { SEND_MESSAGE, DELETE_MESSAGE } from "../constants/action-types";

export default function messages(state = getMessages(10), action){
    switch (action.type) {
        case SEND_MESSAGE:
                const { message, activeUserId, messageId} = action.payload
                const allUserMsg = state[activeUserId]
                const number = messageId || +_.keys(allUserMsg).pop() + 1
                console.log(allUserMsg);
            return {
                ...state,
                [activeUserId]: {
                    ...allUserMsg,
                    [number]:{
                        number,
                        text: messageId ? `${message} (edited)` : message,
                        is_user_msg: true
                    }
                }
            };
        case DELETE_MESSAGE:
            const {message_Id, activeUser_Id} = action.payload
            console.log(message_Id)
            return {
                ...state,
                [activeUser_Id]: _.omit(state[activeUser_Id], message_Id)
            };
        default: 
            return state;
    }
} 