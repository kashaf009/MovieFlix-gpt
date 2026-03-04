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
          src="img/home-img.png"
          alt=""
        />
      </div>

      <Signin/>
      
     
    </div>
  );
};

export default Login;
