import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <footer>
               
                <p className="text-center">&copy; {new Date().getFullYear()} React Blog Posts.</p>
            </footer>
        );
    }
}

export default FooterComponent;
