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

// 2

import React from "react";
import Nav from "./Nav";
import Signin from "./Signin";

const Login = () => {
  return (
    <div className="relative h-[120vh] w-full">

      {/* Background Image */}
      <img
        src="/img/home-img.png"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Netflix Style Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/35"></div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Nav />
        <Signin />
      </div>

    </div>
  );
};

export default Login;

