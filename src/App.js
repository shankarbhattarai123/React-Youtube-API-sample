import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Youtube from './Youtube';
import {VideosList} from './VideosList'

export default class App extends Component {
  state ={videos:[]};
  onsubmit= async term =>{
    const response =await Youtube.get('/search',{
    params : {
      q : term,
    }
    });
    this.setState({videos:response.data.items});
  };
  render() {
    return (
      <div>
        <SearchBar onsubmit={this.onsubmit}/>
        <VideosList videos={this.state.videos}/>
      </div>
    );
  }
}
