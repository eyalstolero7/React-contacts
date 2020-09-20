import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar src={props.src} />
            </div>
            <div className="bottom">
                <Info content={props.phone} />
                <Info content={props.email} />
            </div>
        </div>
    );
}

export default Card;
