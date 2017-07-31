import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from '../components/Nav.js';
import '../css/app.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="app_container">
                <div className="route">
                    <Nav />
                </div>
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default App;