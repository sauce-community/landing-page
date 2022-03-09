import React from 'react';

import '../../../assets/landing/style.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section class="pt-5 py-4 hero">        
                <div class="container">
                    <div class="saucedao2 isoheader">
                        <div class="react-reveal saucedao2 majortextwrapper">
                        <div class="saucedao2 majortext">
                            <a href="https://discord.gg/wZkdf8X6DV" target="_blank">
                                <div id="checkoutbar" class="saucedao2 checkoutbar" >
                                    <p id="early"class="saucedao p text-dark">
                                            You're here early!
                                        <span style={{fontWeight: 300}} class="saucedao2">   
                                        Our app is still under development.  Stay updated or get involved in one of our community channels.</span>
                                    </p>
                                    <i class="fas fa-arrow-right text-dark"></i>
                                </div>
                            </a>
                            <h1 class="saucedao text-cream h1 big">Human, Social & Financial Capital</h1>
                            <h3 style={{marginBottom: "20px"}} class="saucedao text-red h3">
                            ...For the People, By the People.
                            </h3>
                            <p class="saucedao text-cream p" style={{maxWidth: "500px"}}>
                                Sauce DAO is a decentralized networking & funding framework built for  <a id="typingContainer"></a> 
                            </p>
                            
                            <a href="https://discord.gg/wZkdf8X6DV" target="_blank"
                            
                            class="saucedao3 button text-cream inline noarrow"
                            >Join Sauce DAO</a>
                        </div>
                        </div>
                    </div>
                </div>           
            </section>          
        )
    }
}