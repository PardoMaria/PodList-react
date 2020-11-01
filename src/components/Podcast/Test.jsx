import React, { useState } from 'react';
import {getPodcastsFromSpotify} from '../../services/Api'
import PodcastCard from './PodcastCard';
import NavBar from './../NavBar/NavBar'

const Test = () => {
    const [search, setSearch] = useState('')
    const [podcasts, setPodcast] = useState([])

    const getPodcast = () => {
        
        getPodcastsFromSpotify({ search: search })
            .then((res) => {
                //pìntar los resultados
                
                setPodcast(res)
                
            })
            .catch(e => console.log(e))
    }

    return (
        <div>
        <NavBar/>
            <form>
                <input type="text"  placeholder='Busca' onChange={(e) => setSearch(e.target.value)}></input>
            </form>
            <button onClick={() => getPodcast()}>Clic</button>
            {podcasts.map((podcast) => {
            
            return <PodcastCard podcast={podcast}/>
            })}
        </div>
    );
};

export default Test;