import '../Home/Home.css'
import React from 'react';
import SearchPodcast from '../Podcast/SearchPodcast'

const Home = () => {
    return (
        <div className="background">
            <h1 className="main-title">PodList</h1>
            <SearchPodcast />
        </div>
            
    );
};

export default Home;