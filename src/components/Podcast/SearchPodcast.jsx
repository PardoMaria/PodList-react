import React from 'react';
import { useState } from 'react';
import PodcastCard from './PodcastCard';
import { getPodcast, getPodcastsFromSpotify} from '../../services/Api'

const SearchPodcast = () => {
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

export default SearchPodcast;