import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setReferral }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const ref = name.trim().toLowerCase().replace(/\s+/g, "") + "2025";
    setReferral(ref);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-200 via-pink-100 to-violet-200">
      <div className="bg-white shadow-2xl rounded-xl p-10 w-full max-w-md">
        <h1 className="text-3xl text-center font-bold mb-5 text-violet-700">
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded mb-4 px-3 py-2 border border-violet-200 focus:ring-2 focus:ring-violet-500"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-700 hover:to-violet-500 text-white w-full py-2 rounded font-semibold shadow cursor-pointer transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">New user? </span>
          <Link
            to="/signup"
            className="text-violet-700 font-semibold hover:underline cursor-pointer"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
