import React, { Component } from 'react';
import axios from 'axios';

class PostsComponent extends Component {

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
            let postMarkup = (
                <div className="container">
                    <h2>Posts</h2>
                    <ul>
                        { this.state.posts.map(post => <li key={post.id}>{post.name}</li>)}
                    </ul>
                </div>
            );

            return postMarkup;
        
    }
}
export default PostsComponent;
