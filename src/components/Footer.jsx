import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>ⓒ {year} Yadvi Bhalla</p>
        </footer>
    );
}

export default Footer;
