import React from "react";
import "./MessageInput.css";
import store from "../store";
import { setTypingValue, sendMessage } from "../actions";

const MessageInput = ({ value }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const { typing, activeUserId, messageId} = store.getState();
        store.dispatch(sendMessage(typing, activeUserId, messageId))
    }

    const handleChange = e => {
       
        store.dispatch(setTypingValue(e.target.value))
    }
    return (
        <form  className="Message" onSubmit={handleSubmit}>
            <input
                className="Message__input"
                onChange={handleChange} 
                value={value}
                placeholder="write a message"
            /> 
        </form>
    )
}

export default MessageInput;