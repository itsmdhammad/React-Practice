import { useState } from "react";
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {

  const [state, setState] = useState(false);

  const updateState = (newstate) => {
    setState(newstate);
  }

  return (
    <>
      {!state && <Login updateState={updateState} />}
      {state && <Signup updateState={updateState} />}
    </>
  )
}

export default App
