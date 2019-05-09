import React from "react";
import "./Main.css";
import store from "../store";
import Empty from  "./Empty";
import ChatWindow from "./ChatWindow";



const Main = () => {

    const { user, activeUserId } = store.getState();

    const renderContent = () => {
        if(!activeUserId){
            return <Empty user={user} activeUserId={activeUserId}/>
        } else {
            return <ChatWindow  activeUserId={activeUserId}/>
        }
    }
        return (
            <main className="Main">
                {renderContent()}
            </main>
        )

};

export default Main;