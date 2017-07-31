import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">欢迎页</Link></li>
                <li><Link to="/collections">社区</Link></li>
                <li><Link to="/game">游戏</Link></li>
                <li><Link to="/aside">周边</Link></li>
                <li><Link to="/headlines">杉果头条</Link></li>
            </ul>
        );
    }
}

export default Nav;
