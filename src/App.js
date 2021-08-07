//Maneira usando class
/*
import React, { Component } from "react"

const App = () => {
  return (
    <div>
      <Toggle />
    </div>
  )
}


class Toggle extends Component{
  state = {
      toggle: false
  };

  handleToggle = () => {
      this.setState(prevState => {
          return{
              toggle: !prevState.toggle
          }
      });
  };

    render() {
    return (
        <div>
         <p>The Status is:{this.state.toggle ? "ON" : "OFF"}</p>
         <button onClick={this.handleToggle}> Toggle </button>
    </div>
    )
    
     }
}

export default App;
*/

// Maneira sem classe
import React, { useState } from "react"

const App = () => {
  return (
    <div>
      <Toggle />
    </div>
  )
}

const Toggle = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle((prevState)=>!prevState)

    return (
        <div>
         <p>The Status is:{toggle ? "ON" : "OFF"}</p>
         <button onClick={handleToggle}> Toggle </button>
    </div>
    )
}

export default App;