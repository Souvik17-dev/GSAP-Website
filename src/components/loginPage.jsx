import React from "react";

function loginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 p-10 h-100 bg-white rounded-xl shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4">Login to your account</h2>
        <input
          className="outline-none border-1 rounded-md w-full p-3 font-mono mb-5"
          type="text"
          placeholder="email address"
        />
        <input
          className="outline-none border-1 rounded-md w-full p-2 font-mono mb-3"
          type="text"
          placeholder="password"
        />
        <div className="flex justify-between text-[14px] mb-14">
          <h2 className="flex">
            <input type="checkbox" className="flex mr-1" />
            Remember me
          </h2>
          <h2 className="flex underline text-blue-500">Forgot password?</h2>
        </div>
        <button className="rounded-2xl text-white font-sans py-1 px-15 active:scale-90 bg-gradient-to-r from-purple-500 to-pink-500">Login</button>
        <a href="" className="flex items-center justify-center text-[14px] gap-2 "><h2>New here?</h2>Create an account</a>
      </div>
    </div>
  );
}

export default loginPage;
