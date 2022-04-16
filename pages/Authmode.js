import React, { useState } from "react";
import Signin from "../Components/AuthComponent/Signin";
import Signup from "../Components/AuthComponent/Signup";

function Authmode() {
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return <Signin changeSignIn={changeAuthMode} />;
  }

  return (
    <div>
      <Signup changeSignIn={changeAuthMode} />
    </div>
  );
}

export default Authmode;
