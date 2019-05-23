import React from "react";
import "./Header.css";
import { ActionCreators } from "redux-undo";
import store from "../store";

const Header = ({ user }) => {
  const handleRedoUndo = type => {
    store.dispatch(ActionCreators[type]());
  };

  const { name, profile_pic, status } = user;
  return (
    <header className="Header">
      <div className="Header__details">
        <img src={profile_pic} alt={name} className="Header__image" />
        <h1 className="Header__name">{name}</h1>
      </div>
      <p className="Header__status">{status}</p>
      <button onClick={handleRedoUndo.bind(null, "undo")}>undo</button>
      <button onClick={handleRedoUndo.bind(null, "redo")}>redo</button>
    </header>
  );
};

export default Header;
