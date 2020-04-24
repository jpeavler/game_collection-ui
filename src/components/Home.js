import React from 'react';
import {Link} from 'react-router-dom';

const Home = () =>{
    return (
        <>
            <h1>Home</h1>
            <Link to='/BoardGames' class="link">Board Games</Link>
        </>
    )
}

export default Home;