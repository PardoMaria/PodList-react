import React from "react";
// import '../Podcast/SearchPodcast.css'
import { useState } from "react";
import PodcastCard from "./PodcastCard";
import { getPodcast, getPodcastsFromSpotify } from "../../services/Api";

const SearchPodcast = () => {
  const [search, setSearch] = useState("");
  const [podcasts, setPodcast] = useState([]);
  const [lists, setLists] = useState([]);

  const getPodcast = () => {
    getPodcastsFromSpotify({ search: search })
      .then((res) => {
        console.log(res);
        setLists(res.lists);
        setPodcast(res.podcasts);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="home-form home-search">
        <input
          type="text"
          value={search}
          placeholder="Busca"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => getPodcast()}>Busca</button>
      </div>
      {podcasts.map((podcast, i) => {
        return <PodcastCard key={i} podcast={podcast} lists={lists} />;
      })}
    </div>
  );
};

export default SearchPodcast;
