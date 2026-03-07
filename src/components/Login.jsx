// import React from "react";
// import Nav from "./Nav";
// import Signin from "./Signin";

// const Login = () => {
//   return (
//     <div className="">
//       <Nav />
//       <div>
//         <img
//           className="absolute"
//           src="img/home-img.png"
//           alt=""
//         />
//       </div>

//       <Signin/>
      
     
//     </div>
//   );
// };

// export default Login;

import React from "react";
import Nav from "./Nav";
import Signin from "./Signin";

const Login = () => {
  return (
    <div className="relative h-screen w-full">
      <Nav />

      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="img/home-img.png"
        alt=""
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10">
        <Signin />
      </div>
    </div>
  );
};

export default Login;