import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <nav>
                <Link to='/useState'><li>useState</li></Link>
                <Outlet></Outlet>
            </nav>
        </div>
    );
};

export default Main;