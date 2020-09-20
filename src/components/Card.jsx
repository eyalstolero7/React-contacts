import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h2 class="name">{props.name}</h2>
                <img src={props.src} alt="avatar_img" className="circle-img" />
            </div>
            <div className="bottom">
                <p class="info">{props.phone}</p>
                <p class="info">{props.email}</p>
            </div>
        </div>
    );
}

export default Card;
