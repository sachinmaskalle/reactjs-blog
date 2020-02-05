import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    
                    <Link className="navbar-brand" to="/">React JS | Bootstrap</Link>
                    </div>

                    <NavigationComponent />
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;
