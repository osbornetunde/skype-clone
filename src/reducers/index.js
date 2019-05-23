import { combineReducers } from "redux";
import ReduxUndo from "redux-undo";
import contacts from "./contacts";
import user from "./user";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";
import messageId from "./activeMessageId";

export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages: ReduxUndo(messages),
  typing,
  messageId
});

// export default (state = {}, action) => {

//     console.log(
//         " %c =====> In the root reducer with state ",
//         "background:yellow;color:black",
//         state
//       );
//       console.log(
//         "%c =====> action passed in root reducer ",
//         "background:yellow;color:black",
//         action
//       );

//     const newState = Object.assign({}, state, {
//         user: user(state.user, action),
//         messages: messages(state.messages, action),
//         typing: typing(state.typing, action),
//         contacts: contacts(state.contacts, action),
//         activeUserId: activeUserId(state.activeUserId, action),
//         activeChatId: messageId(state.messageId, action)
//     })
//     return newState;
// }
