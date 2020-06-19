import React from "react";

const headerStyle = {
    "backgroundImage": `url(${headerImage})`,
    "backgroundSize": "cover",
    
}
function Header() {
    return (
        <header style={headerStyle}>
            <h1>(React) Google Books Search</h1>
            <p>Search for and Save Books of Interest</p>
        </header>
    );
}

export default Header;