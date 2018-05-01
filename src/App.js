import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase.js'
import './App.css';
import FaHeartO from "react-icons/lib/fa/heart-o";
import FaHeart from "react-icons/lib/fa/heart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      titles: {}
    }
  }
  componentWillMount() {
    this.getData();
  }

  getData = () => {
    axios.get("http://www.reddit.com/hot.json")
    .then((response) => {
      console.log(response.data.data.children);
      this.setState({data: response.data.data.children});
    });
  }

  titleToShow = (title) => {
    return title.slice(0, 60) + '...';
  }

  onFav = (e, id) => {
    // the code bellow does not work
    var liked = firebase.database().ref('liked').push({
			id : id,
			vote: e.target.attributes.class.value || "empty"
    })
  }

  render() {
    const {data} = this.state;
    const url = "http://www.reddit.com/hot.json";
    return (
      <div className="App">
        {data ?
          data.map((d, i) => {
            return (
              <div className="post" key={i}>
                <span className="like">
                  <FaHeartO className="empty" onClick={(e, id) => this.onFav(e, d.data.id)} />
                  <FaHeart className="full" onClick={this.onFav} />
                </span>
                <h3 className="title">{this.titleToShow(d.data.title)}</h3>
                <div className="info">
                  <a className="link" href={url + d.data.permalink}>Link</a>
                  <p className="comments">{d.data.num_comments} comments</p>
                </div>
              </div>
            )
          })  
        : null}
      </div>
    );
  }
}

export default App;
