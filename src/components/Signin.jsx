import React from "react";

const Signin = () => {
  return (
    <div>
      <form className="flex flex-col w-1/4 my-40 mx-auto  gap-5 right-0 left-0 absolute p-15 bg-black opacity-87 rounded-xl">
        <h3 className="text-white font-semibold text-2xl mb-2">Sign in</h3>
        <input
          className="bg-gray-300 text-black py-1 rounded-md px-2 outline-none"
          type="text "
          placeholder="Email address"
        />
        <input
          className="bg-gray-300 text-black py-1 rounded-md px-2 outline-none"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-700 px-4 py-2 rounded-md font-semibold hover:bg-red-800 text-white">
          Sign in
        </button>
        <p className="text-white text-sm">
          didn't have account?
          <a className="text-red-600 hover:text-red-700 font-semibold" href="">
            {" "}
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signin;
