import React, { useState, useRef } from "react";
import { checkFormValidation } from "../utils/FormValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import { photoURL } from "../utils/constant";

const Signin = () => {
  const dispatch = useDispatch();

  const [IsSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const toggelForm = () => {
    setIsSigninForm(!IsSigninForm);
  };

  const handleValidation = () => {
    const message = checkFormValidation(
      !IsSigninForm && name.current?.value,
      email.current.value,
      password.current.value,
    );

    setErrorMessage(message);

    if (message) return;

    // SIGN UP
    if (!IsSigninForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: photoURL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                adduser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                }),
              );

              // navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    }
    // SIGN IN
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then(() => {
          // navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col w-1/4 my-40 mx-auto gap-5 right-0 left-0 absolute p-15 bg-black opacity-87 rounded-xl"
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
          type="email"
          placeholder="Email address"
        />

        <input
          ref={password}
          className="bg-gray-300 text-black py-1 rounded-md px-2 outline-none"
          type="password"
          placeholder="Password"
        />

        <p className="text-red-700 text-md">{errorMessage}</p>

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
