import React, { useState } from "react";

const Signin = () => {
  const [IsSigninForm, setIsSigninForm] = useState(true);

  const toggelForm = () => {
    setIsSigninForm(!IsSigninForm);
  };

  return (
    <div>
      <form className="flex flex-col w-1/4 my-40 mx-auto  gap-5 right-0 left-0 absolute p-15 bg-black opacity-87 rounded-xl">
        <h3 className="text-white font-semibold text-2xl mb-2">
          {IsSigninForm ? "Sign in" : "Sign up"}
        </h3>
        {!IsSigninForm && <input
          className="bg-gray-300 text-black py-1 rounded-md px-2 outline-none"
          type="text "
          placeholder="Full Name"
        />
      
        }
        <input
          className="bg-gray-300 text-black py-1 rounded-md px-2 outline-none"
          type="Email"
          placeholder="Email address"
        />
        <input
          className="bg-gray-300 text-black py-1 rounded-md px-2 outline-none"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-700 px-4 py-2 rounded-md font-semibold hover:bg-red-800 text-white">
          {IsSigninForm ? "Sign in" : "Sign up"}
         
        </button>
        <p
          onClick={toggelForm}
          className="text-red-600 hover:text-red-700 cursor-pointer font-semibold text-sm"
        >
          {IsSigninForm ? "Didn't have Account? Sign up." : "Already Registered ? Sign in Now."}

          
        </p>
      </form>
    </div>
  );
};

export default Signin;
