import { useState } from "react";
import Login from "../components/auth/Login"
import Signup from "../components/auth/Signup"

function AuthLayout() {

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

export default AuthLayout
