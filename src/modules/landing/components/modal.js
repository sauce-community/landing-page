import React from 'react';

import '../../../assets/landing/style.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className={(this.props.state.modalStatus) ? "modal is-open" : "modal"}>
            <div class="modal-content">
              <h2 class="saucedao big text-dark">
                Coming Soon! 
              </h2>
              <h5 class="saucedao  text-dark">
                You're here early...
              </h5>
              <h6 class="saucedao text-dark">
                Our app is still under development. <br />Stay updated or get involved in our community channels!
              </h6>
              <div class="button">
                <a href="https://discord.gg/wZkdf8X6DV" target="_blank" class="saucedao3 button" data-modal="js-toggle-modal" type="button">Join Now</a>
              </div>
            </div>
          </section>   
        )
    }
}