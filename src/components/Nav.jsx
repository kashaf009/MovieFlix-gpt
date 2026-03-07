import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "remixicon/fonts/remixicon.css";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { adduser, removeUser } from "../utils/userSlice";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;

        dispatch(adduser({ uid, email, displayName, photoURL }));

        // ...
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
      }
    });
  }, [dispatch]);

  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="absolute w-full z-20 py-2  h-64 bg-linear-to-b from-black  ">
      <div className="w-[80%] flex mx-auto items-center justify-between ">
        <div>
          <img
            className="w-45 "
            // src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            // alt=""
            src="img/movieflix.png"
          />
        </div>

        <div className="flex items-center gap-3">
          {!user && (
            <div className="border items-center flex gap-1 border-white text-white px-3 py-1 rounded-md">
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                data-icon="LanguagesSmall"
                data-icon-id=":R135daqjalalalb96:"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <select
                className="w-full outline-none font-semibold "
                id="langauge"
              >
                <option className="text-black font-semibold " value="english">
                  English
                </option>
                <option className="text-black font-semibold" value="">
                  Hindi
                </option>
              </select>
            </div>
          )}

          {user && (
            <div className="flex flex-col items-center gap-1 pt-2">
              <img
                className="h-8 w-8 rounded-xl mb-0 "
                src={user?.photoURL}
                alt="profile"
              />
              <p className="text-white font-semibold uppercase bg-red-700 px-2 rounded-3xl text-[10px]">{user?.displayName}</p>
            </div>
          )}

          {user && (
            <button
              onClick={handleSignOut}
              className="bg-red-700 font-semibold rounded-md hover:bg-red-800 text-white px-3 py-1"
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
