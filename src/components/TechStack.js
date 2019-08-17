import React, {Component} from 'react';

class TechStack extends Component{

    state={
        showStack: false,
    }

    showStack = () => {
        const top = window.pageYOffset;
        if(top>900)
        this.setState({
        showStack: true
        })
    }

    componentDidMount(){
        window.addEventListener("scroll", this.showStack)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.showStack)
    }
    
    render(){
        return(
            <div>
            <h1  className={ this.state.showStack ? 'stack-header showText-right' : 'hidden'}>
            My Stack
            </h1>
              <ul  className={ this.state.showStack ? 'tech-stack-ul fade-in' : 'hidden'}>
                  <li><strong>HTML</strong></li>
                  <li><strong>CSS</strong></li>
                  <li><strong>JavaScript</strong></li>
                  <li><strong>React</strong></li>
                  <li><strong>AJAX</strong></li>
                  <li><strong>jQuery</strong></li>
                  <li><strong>Node.js</strong></li>
                  <li><strong>Express.js</strong></li>
                  <li><strong>MongoDB</strong></li>
                  <li><strong>Redux</strong></li>
                  <li><strong>Git</strong></li>
                  <li><strong>GitHub</strong></li>
              </ul>
          </div>
        )
    }
   
}
   
export default TechStack