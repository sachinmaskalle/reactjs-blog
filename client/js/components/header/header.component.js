import React, { Component } from 'react';
import NavigationComponent from '../navigation/navigation.component';

class HeaderComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">React JS | Bootstrap</a>
                    </div>

                    <NavigationComponent />
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;
