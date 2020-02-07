import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class PostsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
          }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(response => {
            this.setState({ 
                posts: response.data.slice(0,10)
            });
          })
    }

    render() {
        // destruct the posts data
        const {posts} = this.state;

         // check if posts exists
        const postList = posts.length ? (
                posts.map(post => {
                    return( 
                            <li className="list-group-item" key={post.id}>
                                     <Link to={'/posts/' + post.id }>{post.title}</Link> 
                            </li>
                    )
                })
            ) : (
                <div className="">Loading posts please wait ...</div>
            )
            
            let postMarkup = (
                <div className="container">
                    <h2>Posts</h2>
                    <ul className="list-group">
                        {postList}
                    </ul>
                </div>
            );

            return postMarkup;
        
    }
}
export default PostsComponent;
