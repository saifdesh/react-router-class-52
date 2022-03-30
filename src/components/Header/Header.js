import React from 'react';

const Header = () => {
    return (
        <div>

            <h1>Welcome to my Fancy Routing in header !!!</h1>

            <nav>

                <Link to "/">Home</Link>
                <Link to ="/friends">Friends</Link>
                <Link to ="/about">About</Link>
               
            
            </nav>
        
        </div>
    );
};

export default Header; 