import React from 'react';
import {Link} from 'react-router-dom';

const Home = () =>{
    return (
        <>
            <h2>Home</h2>
            <Link to='/BoardGames'>Board Games</Link>
        </>
    )
}

export default Home;