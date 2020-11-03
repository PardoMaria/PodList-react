import React from 'react';
// import '../Podcast/SearchPodcast.css'
import { useState } from 'react';
import PodcastCard from './PodcastCard';
import { getPodcast, getPodcastsFromSpotify} from '../../services/Api'

const SearchPodcast = () => {
    const [search, setSearch] = useState('')
    const [podcasts, setPodcast] = useState([])
    const [lists, setLists] = useState([])



    const getPodcast = () => {
        
        getPodcastsFromSpotify({ search: search })
            .then((res) => {     
                setLists(res.lists) 
                setPodcast(res.podcasts)
            })
            .catch(e => console.log(e))
    }

    return (
        <div>
            <div className="home-form home-search">
                 <form className="">
                    <input type="text"  placeholder='Busca' onChange={(e) => setSearch(e.target.value)}></input>
                </form>
             <button onClick={() => getPodcast()}>Busca</button>
            </div>
            {podcasts.map((podcast) => {
            return <PodcastCard podcast={podcast} lists={lists}/>
            })}

        </div>
    );
};

export default SearchPodcast;