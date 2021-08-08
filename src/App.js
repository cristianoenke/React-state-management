import React from "react"
import Toggle from './Toggle'
import { ToggleProvider} from "./ContextProvider"

const App = () => {
  return (
    <ToggleProvider>
      <Toggle />
      <p> Other Status: </p>
    </ToggleProvider>
  )
}

export default App;