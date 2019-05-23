import _ from "lodash";
import produce from "immer";
import { getMessages } from "../static-data.js";
import { SEND_MESSAGE, DELETE_MESSAGE } from "../constants/action-types";

function messages(state, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, activeUserId, messageId } = action.payload;
      const allUserMsg = state[activeUserId];
      const number = messageId || +_.keys(allUserMsg).pop() + 1;
      const newMsg = {
        number,
        text: messageId ? message.concat(" (edited)") : message,
        is_user_msg: true
      };
      state[activeUserId][number] = newMsg;
      break;
    case DELETE_MESSAGE:
      const { message_Id, activeUser_Id } = action.payload;
      console.log(message_Id);
      state[activeUser_Id] = _.omit(state[activeUser_Id], message_Id);
      break;
    default:
      return state;
  }
}

export default produce(messages, getMessages(10));
