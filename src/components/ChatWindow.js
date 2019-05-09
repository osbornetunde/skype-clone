import React from 'react'
import "./ChatWindow.css"
import store from "../store";
import Header from "./Header";
import Chats from "../components/Chats";
import _ from "lodash";
import MessageInput from '../containers/MessageInput';


const ChatWindow = ({ activeUserId }) => {

  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];
  const { typing } = state;
  
  return (
    <div className="ChatWindow">
      <Header user={activeUser}/>
      <Chats messages={_.values(activeMessages)} />
      <MessageInput value={typing}/>
    </div>
  )
}

export default ChatWindow;