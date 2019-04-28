import React, { Component } from 'react';
import SidePanel from './SidePanel';
import Home from './Home';
import Projects from './Projects';
import About from './About';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.menuHandler = this.menuHandler.bind(this)
  }

  menus = [
    { name: "Home"}, { name: "Projects"}, { name: "About"}
  ]

  state = {
    content: "Home",
  }

  menuHandler(newcontent) {
    console.log('content', newcontent, newcontent === "Projects")
    this.setState({
      content: newcontent,
    })
  }

  render() {
    return (
      <div className="website">
        <SidePanel menus={this.menus} onClick={this.menuHandler}/>
        {this.state.content === "Home" && <Home />}
        {this.state.content === "Projects" && <Projects />}
        {this.state.content === "About" && <About />}
      </div>
    )
  }
}

export default App;
