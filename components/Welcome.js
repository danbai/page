import React, { Component } from 'react';
import { Link } from 'react-router';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeArray: [],
            infoArray: [],
            storeVisible: false,
            infoVisible: false
        };
    }
    setVisible = (name, boolean) => {
        this.setState({
            [name]: boolean
        });
    }
    componentDidMount() {
        fetch('../api/store.json')
            .then(response => response.json())
            .then(res => {
                this.setState({
                    storeArray: res.response.storeArray
                });
            });

        fetch('../api/store.json')
            .then(response => response.json())
            .then(res => {
                this.setState({
                    infoArray: res.response.infoArray
                });
            });
    }
    render() {
        return (
            <div className="welcome-container">
                <div className="banner"></div>
                <div className="content">
                    <div className="content-header">
                        <Link to="/game_store" className="link-to-store"></Link>
                        <div className="search-wrap">
                            <div className="search-float-wrap">
                                <span className="search-float">杉果客户端下载</span>
                                <div className="search-float store-allow">
                                    <span
                                        onMouseEnter={ this.setVisible.bind(this, 'storeVisible', true) }
                                        onMouseLeave={ this.setVisible.bind(this, 'storeVisible', false) }
                                    >商城</span>
                                    <ul className={ this.state.storeVisible ? '' : 'hidden' }>
                                        {
                                            this.state.storeArray.map((item, index) => {
                                                return (
                                                    <li key={ index }>{ item }</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <input type="text" className="search-float" />
                                <button className="search-float">search</button>
                            </div>
                        </div>
                        <div className="info-wrap">
                            <div className="info-float">购物车</div>
                            <div className="info-float">
                                <img
                                    onMouseEnter={ this.setVisible.bind(this, 'infoVisible', true) }
                                    onMouseLeave={ this.setVisible.bind(this, 'infoVisible', false) }
                                    src="https://s4.sonkwo.com/FsRsuz52yhcRWgL6EadprGiE8K85?imageView2/2/w/38/h/38" />
                                <ul className={ this.state.infoVisible ? '' : 'hidden' }>
                                    {
                                        this.state.infoArray.map((item, index) => {
                                            return (
                                                <li key={ index }>{ item }</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Welcome;