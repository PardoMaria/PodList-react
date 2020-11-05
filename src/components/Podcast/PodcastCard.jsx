import React from 'react';
import './PodcastCard.css'
import SelectList from '../SelectList/SelectList';

const PodcastCard = ({ podcast, lists }) => {
  
    return (
        <div>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={podcast.images[0].url} className="card-img" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                 <h5 className="card-title">{podcast.name}</h5>
                  <p className="card-text">{podcast.description}</p>
                  <p className="card-text"><small className="text-muted"><b>Created by</b> {podcast.publisher}</small></p>
                  
                  <SelectList lists={lists} podcast={podcast}/>
                
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default PodcastCard;