import React from  "react";
import "./Header.css";

const Header = ({ user }) => {
    
    const { name, profile_pic, status} = user;
    return (
            <header className="Header">
                <div className="Header__details">
                    <img src={profile_pic} alt={name} className="Header__image"/>
                    <h1 className="Header__name">{name}</h1> 
                </div>
                <p className="Header__status">{status}</p>
               
            </header>
    )
}

export default Header;