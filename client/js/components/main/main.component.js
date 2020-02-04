import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import HeaderComponent from '../header/header.component';
import FooterComponent from '../footer/footer.component';

import HomeComponent from '../home/home.component';
import PostsComponent from '../posts/posts.component';

class MainComponent extends Component {
    render() {
        return (
            <Router>
                <div>
                    <HeaderComponent />

                    <Route exact path='/' component={HomeComponent} />
                    <Route path='/about-us' component={PostsComponent} />

                    <FooterComponent />
                </div>
            </Router>
        );
    }
}
export default MainComponent;
