import React from "react";
import { LockClosedIcon, MailIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className=" col-span-2 h-screen w-full relative overflow-hidden z-10 ">
          <div className="h-1/2 w-full absolute z-20 bg-gradient-to-b from-black to-transparent" />
          <div className="h-1/2 w-full absolute bottom-0 z-20 bg-gradient-to-t from-black to-transparent" />
          <img
            className="absolute"
            src="https://bramptonist.com/wp-content/uploads/2018/06/netflix-image.jpg"
            alt=""
          />
          <div className="flex justify-center items-center">
            <form action="login" className="absolute top-24 z-30 w-2/6 px-8">
              <div className="flex justify-center pb-10">
                <img
                  className="h-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                  alt=""
                />
              </div>
              <div className="bg-black bg-opacity-80 px-12 pt-12 pb-32 border rounded-xl border-brand-800">
                <h1 className="text-white text-3xl pb-8">
                  Login to Netflix Admin
                </h1>
                <div className="bg-brand-800 rounded-lg flex h-12 items-center px-4 mt-6 hover:border-gray-500 border border-brand-700 transition-all ease-out duration-500 ">
                  <MailIcon className="h-7 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Email or Phone Number"
                    className="bg-transparent border-0 focus:ring-0 w-full placeholder-gray-400 text-white"
                  />
                </div>
                <div className="bg-brand-800 rounded-lg flex h-12 items-center px-4 mt-6 hover:border-gray-500 border border-brand-700 transition-all ease-out duration-500 ">
                  <LockClosedIcon className="h-7 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-transparent border-0 focus:ring-0 w-full placeholder-gray-400 text-white"
                  />
                </div>
                <h1 className="text-brand-500 text-sm hover:underline hover:text-gray-200 transition duration-500 cursor-pointer pt-2">
                  Forget password?
                </h1>
                <Link to="/">
                  <button className="bg-brandred-500 text-white h-12 rounded-lg w-full mt-10 mb-3 hover:brightness-75 duration-500">
                    Log In
                  </button>
                </Link>
                <div className="flex space-x-2 cursor-pointer">
                  <input
                    id="remmember-me"
                    type="checkbox"
                    className="rounded border-none ring-none focus:ring-0 focus:ring-offset-0 bg-brand-500 h-5 w-5 focus:text-red-600 text-red-600"
                  />
                  <label
                    htmlFor="remmember-me"
                    className="text-brand-500 text-sm"
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
