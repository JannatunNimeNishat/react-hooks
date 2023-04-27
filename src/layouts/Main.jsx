import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <nav>
                <Link to='/useState'><li>useState</li></Link>
                <Link to='/useEffect'><li>useEffect</li></Link>
            </nav>
                <Outlet></Outlet>
        </div>
    );
};

export default Main;