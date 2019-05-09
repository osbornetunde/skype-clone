import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE } from "../constants/action-types";


export const setActiveUserId = user_id => ({
    type: SET_ACTIVE_USER_ID,
    payload: user_id
})

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
})

export const sendMessage = (message, activeUserId, messageId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        activeUserId,
        messageId
    }
})

export const deleteMessage = (message_Id, activeUser_Id) =>({
    type: DELETE_MESSAGE,
    payload: {
        message_Id,
        activeUser_Id
    }
})

export const editMessage = (message, messageId, activeUserId) => ({
    type: EDIT_MESSAGE,
    payload: {
        message,
        messageId,
        activeUserId
    }
})