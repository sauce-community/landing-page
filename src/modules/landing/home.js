import React from 'react';

import '../../assets/landing/style.css';
import Modal from './components/modal.js';

import Nav from './components/nav.js';
import Hero from './components/hero.js';
import About from './components/about.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalStatus: false
        };

        // Functions
        this.toggleModal = this.toggleModal.bind(this);

        this.functions = {
            toggleModal: this.toggleModal
        }
    }

    toggleModal() {
        console.log(this.state)
        this.setState({modalStatus: !this.state.modalStatus});
    }

    render() {
        return(
            <div style={{width: '100vw', height: '100vh'}}>
                <Nav functions={this.functions} />
                <Modal functions={this.functions} state={this.state} />
                <Hero functions={this.functions} state={this.state} />
                <About functions={this.functions} state={this.state} />
            </div>
        )
    }
}