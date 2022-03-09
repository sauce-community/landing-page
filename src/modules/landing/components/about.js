import React from 'react';

import '../../../assets/landing/style.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title saucedao text-red mb-0 pt-2 saucedao">2,337</h2>
                    <h3 class="card-title saucedao text-dark pt-3 saucedao">Community Members</h3>
                </div>
            </div>
        )
    }
}

export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <section class="mb-6"  id="about">      
       
                <div class="container mb-7">            
                    <div class="col-md-12 pt-4 mb-6">
                        <div class="row  col-md-12 mt-5">
                            <h1 class="saucedao text-cream big h1 " >What is Sauce DAO?  
                            </h1>                   
                            <div class="col-md-10 mt-5" >                         
                            </div>     
                            <div class="col-md-2" >
                                <a href="https://saucedao.gitbook.io/sauce-dao/" target="_blank">
                                    <h5 class="text-cream">Learn More <i class="fas fa-arrow-right"></i></h5>   
                                </a>
                            </div>   
                        </div>  
                    </div>                   
                    <div class="col-12 mb-6">
                        <div class="card-deck pricing-table  pt-3">
                            <div class="card">
                                <div class="card-body">
                                    <h2 class="card-title saucedao text-red mb-0 pt-2 saucedao">2,337</h2>
                                    <h3 class="card-title saucedao text-dark pt-3 saucedao">Community Members</h3>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h2 class="card-title text-red mb-0 pt-2 saucedao">100+</h2>
                                    <h3 class="card-title text-dark saucedao pt-3">Active Developers</h3>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h2 class="card-title text-red mb-0 pt-2 saucedao">50k+</h2>
                                    <h3 class="card-title text-dark saucedao  pt-3"> Lines of Code Written </h3>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h2 class="card-title text-red mb-0 pt-2 saucedao">10+</h2>
                                    <h3 class="card-title text-dark saucedao pt-3">Sponsored Projects</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div class="container mt-6">
                    <div class="col-md-12 mx-auto"> 
                        <div class="col-md-12 mx-auto"> 
                            <div class=" row mb-5 "> 
                                
                                <div class="col-md-12 box">                            
                                    <h1 class="text-red saucedao h1 mt-5" >
                                        <i style={{color: "#db5809", fontSize: "3em"}} class="fas fa-lightbulb mobile"></i>
                                        A Decentralized Incubator</h1>
                                </div>
                                <div class="col-md-23 row mx-auto">       
                                        <div class="col-md-9">
                                            <h2 class="saucedao text-cream"> We crowdsource good ideas.</h2> 
                                            <div class="col-md-7 mt-4 ">
                                                <p class="text-cream p saucedao">We leverage our community to 
                                                    approach the problem of incentivizing collaborative funding and development to help pre-seed ventures reach their milestones.
                                                </p>
                                            </div>  
                                        </div>
                                        <div class="col-md-3 mt-5">
                                            <i style={{color: "#db5809", fontSize: "15em"}} class="fas fa-lightbulb no-mobile"></i>
                                        </div>
                                </div>     
                            </div>        
                        </div>             
                        <div class="col-md-12 mx-auto"> 
                            <div class=" row mt-3 mb-5 "> 
                                
                                <div class="col-md-12 box">                            
                                    <h1 class="text-red saucedao h1 mt-4" style="float:right;">
                                        <i style={{color: "#db5809", fontSize: "3em"}} class="fas fa-rocket mobile"></i>
                                        A Project Accelerator</h1>   
                                </div>
                                <div class="col-md-12 row ">
                                    <div class="col-md-5">
                                        <i style={{color: "#db5809", fontSize: "15em"}} class="fas fa-rocket no-mobile"></i>
                                    </div>
                                    <div class="col-md-7">
                                        <h2 class="saucedao h2 text-cream" > We democratize growth.</h2>
                                        <div class="col-md-10 mt-4 ">
                                            <p class="text-cream p saucedao">
                                            While <b>financial</b> capital is vital for growth, <b>human</b> and
                                            <b>social</b> capital are often the backbone upon which successful ventures are built.  We collectivise and democratise these three key aspects into an
                                            accessible launchpad to bring ideas from concept to reality.
                                            </p>
                                        </div>    
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div class="col-md-12 mx-auto"> 
                            <div class=" row mt-3 mb-5 "> 
                                
                                <div class="col-md-12 box">                            
                                    <h1 class="text-red saucedao h1  mt-4" >
                                        <i style={{color: "#db5809", fontSize: "3em"}} class="fas fa-globe-africa mobile"></i>
                                        A Social Impact Fund</h1>
                                </div>
                                <div class="col-md-23 row mx-auto">       
                                        <div class="col-md-9">
                                            <h2 class="saucedao h2 text-cream"> We value making a difference.</h2> 
                                            <div class="col-md-7 mt-4 ">
                                                <p class="text-cream p saucedao"> We prioritize supporting impact driven projects, which can often lack the incentives to bring attention to
                                                    the problems they address. Our approach harnesses the strength of the web3 community to
                                                    empower social causes to bring about real change.</p>
                                            </div>  
                                        </div>
                                        <div class="col-md-3 mt-5">
                                            <i style={{color: "#db5809", fontSize: "15em"}} class="fas fa-globe-africa no-mobile"></i>
                                        </div>
                                </div>     
                            </div>        
                        </div>          
                    </div>
                </div>
            </section>
        )
    }
}