import React from "react";
import Nav from "./Nav";
import Signin from "./Signin";

const Login = () => {
  return (
    <div className="">
      <Nav />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg"
          alt=""
        />
      </div>

      <Signin/>
      
     
    </div>
  );
};

export default Login;
