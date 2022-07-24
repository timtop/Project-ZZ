import React, { useState } from "react";
import { Toaster} from 'react-hot-toast';
import Signin from "../../Components/AuthComponent/Signin";
import Signup from "../../Components/AuthComponent/Signup";

function Authmode() {
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return (
    <div>
      <Toaster />
      {authMode === "signin" ? <Signin changeSignIn={changeAuthMode} />: <Signup changeSignIn={changeAuthMode} /> }
     
    </div>
  );
}

export default Authmode;
