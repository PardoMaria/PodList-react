import React from 'react';
import "./PodcastLike.css"
import { addFav } from '../../services/Api';


export class Like extends React.Component {
    state = {
        favorites:' this.props.favorites.length'
      }
    
      handleClick = () => {

        addFav(this.props.likeId, { name: this.props.name, description: this.props.description, images: this.props.images, publisher: this.props.publisher })
          .then(response => {
            this.setState({
                favorites: this.state.favorites 
            })
          })
      }
      
    render() {
        const text = this.state.liked ? 'liked' : 'haven\'t liked';
        const label = this.state.liked ? 'Unlike' : 'Like'
        return (
            <div className="customContainer">
                <button className="btn btn-primary" onClick={() => this.handleClick()}>
                  {label}
                </button>
            </div>
        );
    }
}

export default Like;