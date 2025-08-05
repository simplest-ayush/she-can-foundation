import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import instance from "../api/axios";
import toast from "react-hot-toast";

export default function Signup({ setReferral }) {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const trimmedName = name.trim();
    const generatedReferralCode =
      trimmedName.toLowerCase().replace(/\s+/g, "") + "2025";
    const userData = {
      name: trimmedName,
      referralCode: generatedReferralCode,
    };

    try {
      await instance.post("/api/signup", userData);
      toast.success("Signup Successful! Please Login", { duration: 2000 });
      navigate("/");
    } catch (error) {
      console.error(
        error.response?.data?.message || error.message || "Signup failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-200 via-pink-100 to-violet-200">
      <div className="bg-white shadow-2xl rounded-xl p-10 w-full max-w-md">
        <h1 className="text-3xl text-center font-bold mb-5 text-violet-700">
          Signup
        </h1>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded mb-4 px-3 py-2 border border-violet-200 focus:ring-2 focus:ring-violet-500"
          />
          <textarea
            placeholder="Why you want to join"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={3}
            className="w-full rounded mb-4 px-3 py-2 border border-violet-200 focus:ring-2 focus:ring-violet-500 resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-700 hover:to-violet-500 text-white w-full py-2 rounded font-semibold shadow cursor-pointer transition duration-300"
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <Link
            to="/"
            className="text-violet-700 font-semibold hover:underline cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
