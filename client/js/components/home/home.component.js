import React, { Component } from 'react';
import axios from 'axios';

class HomeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
          }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=1`)
          .then(response => {
            const posts = response.data;
            this.setState({ posts });
          })
      }

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                    <h2>Heading</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2>Heading</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                </div>
                </div>
                <hr />
            </div> 
        );
    }
}
export default HomeComponent;
