import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import HeaderComponent from '../header/header.component';
import FooterComponent from '../footer/footer.component';

import HomeComponent from '../home/home.component';
import PostsComponent from '../posts/posts.component';
import PostDetailsComponent from '../postdetails/postdetails.component';

class MainComponent extends Component {
    render() {
        return (
            <Router>
                <div>
                    <HeaderComponent />

                    <Route exact path='/' component={HomeComponent} />
                    <Route path='/posts' component={PostsComponent} /> 
                    <Route path='/posts/:postId' component={PostDetailsComponent} /> 
                    <FooterComponent />
                </div>
            </Router>
        );
    }
}
export default MainComponent;
