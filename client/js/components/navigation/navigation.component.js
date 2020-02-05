import React, { Component } from 'react';
import { Link , NavLink} from 'react-router-dom';

class NavigationComponent extends Component {
    render() {
        return (
            <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/posts'>Posts</NavLink></li>
                </ul>
          </div>
        );
    }
}

export default NavigationComponent;
