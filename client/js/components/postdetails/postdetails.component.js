import React, { Component } from 'react';
import axios from 'axios';

class PostDetailsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
    }

    componentDidUpdate() {
        //console.log(this.props);
        let id = this.props.match.params.postId;
        console.log('Id is ' + id);
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            if(this.state.post != this.state.post) {
            this.setState({
                 post: res.data
            });
        }
        });
            
    }

    render() {
        
        const post = this.state.post ? (
            <div>
                <p>{this.state.post.id}</p>
                <p>{this.state.post.title}</p>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="text-primary">Loading Individual post..</div>
        )

        return (
            <div className="container">
                {post}
            </div>
        );
    }
}

export default PostDetailsComponent;
