import React, { Component } from 'react';
import { Link } from 'react-router';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeArray: [],
            infoArray: [],
            storeVisible: false,
            infoVisible: false,
            slideImg: [
                [], [], []
            ],
            current: 0
        };
    }
    setVisible = (name, boolean) => {
        this.setState({
            [name]: boolean
        });
    }
    slideLeft = () => {
        let current = this.state.current;
        if (current > 0) {
            this.setState({
                current: current - 1
            });
        }
    }
    slideRight = () => {
        let current = this.state.current;
        if (current < this.state.slideImg.length - 1) {
            this.setState({
                current: current + 1
            });
        }
    }
    slideCon = (current) => {
        this.setState({
            current: current
        });
    }
    componentDidMount() {
        fetch('../api/store.json')
            .then(response => response.json())
            .then(res => {
                this.setState({
                    storeArray: res.response.storeArray,
                    infoArray: res.response.infoArray,
                    slideImg: res.response.slideImg
                });
            });

        setInterval(() => {
            let current = this.state.current; // 0 1 2 

            if (current >= 2) {
                current = 0;
            } else {
                current++; // 1 2 0
            }

            this.setState({
                current: current
            });
        }, 5000);
    }
    render() {
        let { storeVisible, storeArray, infoVisible, infoArray, slideImg, current } = this.state;

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
                                    <ul className={ storeVisible ? '' : 'hidden' }>
                                        {
                                            storeArray.map((item, index) => {
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
                                <ul className={ infoVisible ? '' : 'hidden' }>
                                    {
                                        infoArray.map((item, index) => {
                                            return (
                                                <li key={ index }>{ item }</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="content-main">
                        <div className="slide">
                            <div className="slide-img">
                                {
                                    slideImg[current].map((item, index) => {
                                        return (
                                            <img src={ item } key={ index } />
                                        )
                                    })
                                }
                            </div>
                            <div className="slide-control">
                                <ul>
                                    <li className="left" onClick={ this.slideLeft }>left</li>
                                    <li
                                        className={ "con " + (current === 0 ? 'con-current' : '') }
                                        onClick={ this.slideCon.bind(this, 0) }
                                    ></li>
                                    <li 
                                        className={ "con " + (current === 1 ? 'con-current' : '') }
                                        onClick={ this.slideCon.bind(this, 1) }
                                    ></li> 
                                    <li 
                                        className={ "con " + (current === 2 ? 'con-current' : '') }
                                        onClick={ this.slideCon.bind(this, 2) }
                                    ></li>
                                    <li className="right" onClick={ this.slideRight }>right</li>
                                </ul>
                            </div>
                        </div>
                        <div className="main-display">
                            <div className="display-collection"></div>
                            <div className="display-hot"></div>
                        </div>
                        <div className="media">
                            <h2></h2>
                            <ul></ul>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Welcome;