import React, { useState, useRef } from "react";
import { checkFormValidation } from "../utils/FormValidate";

const Signin = () => {
  const [IsSigninForm, setIsSigninForm] = useState(true);
  const [errorMassage, setErrorMassage] = useState("");
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const toggelForm = () => {
    
    setIsSigninForm(!IsSigninForm);
  };

  const handleValidation = () => {
    // console.log(name?.current.value);
   
    const massage = checkFormValidation( (!IsSigninForm 
      && name.current.value
    ), email.current.value, password.current.value );

    setErrorMassage(massage)
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col w-1/4 my-40 mx-auto  gap-5 right-0 left-0 absolute p-15 bg-black opacity-87 rounded-xl"
      >
        <h3 className="text-white font-semibold text-2xl mb-2">
          {IsSigninForm ? "Sign in" : "Sign up"}
        </h3>
        {!IsSigninForm && (
          <input
            ref={name}
            className="bg-gray-300 text-black py-1 rounded-md px-2 outline-none"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="bg-gray-300 text-black py-1 rounded-md px-2 outline-none"
          type="Email"
          placeholder="Email address"
        />
        <input
          ref={password}
          className="bg-gray-300 text-black py-1 rounded-md px-2 outline-none"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-700 text-md ">{errorMassage}</p>
        <button
          onClick={handleValidation}
          className="bg-red-700 px-4 py-2 rounded-md font-semibold hover:bg-red-800 text-white"
        >
          {IsSigninForm ? "Sign in" : "Sign up"}
        </button>
        <p
          onClick={toggelForm}
          className="text-red-600 hover:text-red-700 cursor-pointer font-semibold text-sm"
        >
          {IsSigninForm
            ? "Didn't have Account? Sign up."
            : "Already Registered ? Sign in Now."}
        </p>
      </form>
    </div>
  );
};

export default Signin;
