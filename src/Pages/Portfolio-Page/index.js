import React, { Component } from 'react' ;
import axios from 'axios';
import "./portfolio-page.css" ;

class PortfolioPage extends Component {
    
    state = {
        projects: []
    };

    componentDidMount(){

    // axios in a class component, to see it with a function component go to Blog-Page component

        axios.get("https://raw.githubusercontent.com/mohamedfiky/_FIKY_APIs/master/blog-portfolio-API/blog-portfolio-api.json")
             .then(res =>{this.setState({ projects: res.data})});
    };

    render() {

        const {projects}= this.state;
        //const projects = this.state.projects ;
        // console.log(projects);


        const portfolio_projects = projects.map(project =>{
            if(project.isPortfolio == true){
                return(
                    <div className="project" key={project.id}>
                            <img src={project.imgUrl} />
                            <div className="project-info">
                                <h3>{project.portfolioTitle}</h3>
                                <p>{project.content.slice(0,170)}...</p>
                            </div>
                    </div>
                );
            }
        });

        return (
            <div className="portfolio-page" id="portfolio-page">
                <div className="container">
                    <h2 className="special-h">Our Portfolio</h2>
                    <p>Our amazing projects</p>

                    <div className="portfolio-projects">

                        {portfolio_projects}

                        {/* <div className="project">
                            <img src="images/work01.png" />
                            <div className="project-info">
                                <h3>Casata Salsabil</h3>
                                <p>Sit amet consectetur adipisicing elit. Totam, esse perferendis?</p>
                            </div>
                        </div>
                        <div className="project">
                            <img src="images/work02.png" />
                            <div className="project-info">
                                <h3>Haliba Fahla</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="project">
                            <img src="images/work03.png" />
                            <div className="project-info">
                                <h3>Tamro Hindi</h3>
                                <p>Ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam amet. </p>
                            </div>
                        </div> */}
                    
                    </div>

                </div>
            </div>
        )
  }
}

export default PortfolioPage ;