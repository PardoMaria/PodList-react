import '../Home/Home.css'
import React from 'react';
import SearchPodcast from '../Podcast/SearchPodcast'

const Home = () => {
    return (
        <div className="main">
            <h1 className="main-title highlight">PODLIST</h1>
            {/* <div className="highlight"></div> */}
            <h4 className="sub-title">/ Poh · Lí /</h4>
            <SearchPodcast />
        </div>
            
    );
};

export default Home;