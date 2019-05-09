import React, { useEffect, useRef } from "react";
import "./Chats.css";
import store from "../store";
import { deleteMessage, editMessage } from "../actions";

const Chat = ({ message }) => {

    const { activeUserId } = store.getState();

    const { text, is_user_msg, number } = message;

    const handleDeleteMessage = (number) => {
        store.dispatch(deleteMessage(number, activeUserId))
    }

    const handleEditMessage = (number, text) => {
        store.dispatch(editMessage(text, number, activeUserId))
    }
    return (
    is_user_msg ?
        <div 
            className="Chat is-user-msg"
            onDoubleClick={handleEditMessage.bind(null, number, text)}
        >
                <span 
                    className="close__btn"
                    onClick={handleDeleteMessage.bind(null, number)}
                >
                    X
                </span>
                {text}
        </div> :
        <div className="Chat">{text}</div>
    )
}

const Chats = ({ messages }) => {

    const chatRef = useRef();

    useEffect(() => {
        scrollToBottom()
    })

    useEffect(() => {
        scrollToBottom()
    }, []);

    const scrollToBottom = () => {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }

    return (
        <div className="Chats" ref={chatRef}>
            {messages.map(message => (
                <Chat message={message} key={message.number} />
            ))}
        </div>
    )
}

export default Chats;