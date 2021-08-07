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
      <p> Other Status: </p>
    </div>
  )
}

const Toggle = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(prevState=>!prevState)

    return (
        <div>
            <ToggleStatus toggle={toggle} />
            <ToggleButton handleToggle={handleToggle} />
        </div>
    )
}

const ToggleStatus = ({toggle}) => (
    <p>The Status is:{toggle ? "ON" : "OFF"}</p>
 );

const ToggleButton = ({handleToggle}) => (
    <button onClick={handleToggle}> Toggle </button>

    )
export default App;