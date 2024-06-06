import React from 'react';

const Header = () => {
    const handleClick = () => {
        // Redirect to the homepage
        window.location.href = "/";
    };

    return (
        <header className="header" onClick={handleClick} style={{ cursor: 'pointer' }}> {/* Add onClick event and cursor style */}
            <h1>UNSOLICITED RANTS</h1>
        </header>
    );
};

export default Header;
