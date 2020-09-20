import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contect) {
    return (
        <Card
            key={contect.id}
            name={contect.name}
            src={contect.imgURL}
            phone={contect.phone}
            email={contect.email}
        />
    );
}

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map(createCard)}
        </div>
    );
}

export default App;
