import React from 'react';

import '../../../assets/landing/style.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="smart-scroll">
                <div className="container">
                    <nav>
                        <div className="logo">
                            <a class="brand" href="#"> 
                                <img class="logo-main" src="img/logo-c.png" height="40" width="40" />
                                <img class="logo-hover" src="img/logo-o.png" height="40" width="40" />
                            </a> 
                        </div>
                        <input type="checkbox" id="nav" class="hidden" />
                        <label for="nav" type="button" class="nav-btn" tabindex="0" aria-label="Click Me to expand Navigation">
                            <i></i>
                            <i></i>
                            <i></i>
                        </label>
                        <div class="nav-wrapper">
                            <ul>
                                <li><a class="nav-link page-scroll" href="#about" tabindex="0" aria-label="Click Me to expand Navigation">About Us</a></li>
                                <li><a class="nav-link page-scroll"href="https://saucedao.gitbook.io/sauce-dao/" target="_blank">Docs</a></li>
                                <li><a class="nav-link page-scroll" href="#resources">Resources</a></li>
                                <li><a onClick={this.props.functions.toggleModal} class="saucedao3 button text-cream inline" type="button">Launch App</a></li>	
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}