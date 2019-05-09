import { combineReducers } from "redux";
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
    messages,
    typing,
    messageId
})