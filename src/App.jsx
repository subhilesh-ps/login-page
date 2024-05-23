import "./App.css";
import { useState } from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);

  // Since states can't be changed directly from the child component using props. We create a function and pass it like this.
  const IsLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  const ToggleForm = () => {
    setToggleForm(!toggleForm);
  };
  return (
    <>
      {loggedIn ? (
        <Home IsLoggedIn={IsLoggedIn} />
      ) : toggleForm ? (
        <Login ToggleForm={ToggleForm} IsLoggedIn={IsLoggedIn} />
      ) : (
        <SignUp ToggleForm={ToggleForm} />
      )}
    </>
  );
}

export default App;
