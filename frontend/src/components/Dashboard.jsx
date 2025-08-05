import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import instance from "../api/axios";

export default function Dashboard({ referral }) {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get(`/api/user/${referral}`)
      .then((res) => setData(res.data))
      .catch((error) => {
        console.error(error.message || "Invalid login. Try again!");
        navigate("/");
      });
  }, []);

  if (!data)
    return (
      <div className="flex justify-center mt-52">
        <span className="animate-spin size-10 border-4 border-violet-300 border-t-violet-600 rounded-full" />
      </div>
    );

  // Logout handler: clears referral and redirects to login page
  const handleLogout = () => {
    // If you store referral in a parent state or context, clear it here
    // For now, just navigate back to login
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl px-12 py-7 max-w-2xl w-full">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold mb-1 text-violet-700">
            Welcome, {data.name}!
          </h2>
          <p className="text-gray-500 mb-2">
            Referral Code:{" "}
            <span className="font-mono font-semibold">{data.referralCode}</span>
          </p>
        </div>
        <div className="my-7">
          <h3 className="text-lg text-gray-700 font-semibold mb-1">
            Total Donations Raised
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-4xl font-extrabold text-green-600">
              ₹{(data.totalDonations ?? 0).toLocaleString()}
            </span>
            <svg
              className="size-8 text-green-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 7L9 19l-5.5-5.5 1.42-1.42L9 16.17l10.58-10.59z" />
            </svg>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-violet-800 mb-2">
            Rewards & Unlockables
          </h3>
          <ul className="flex flex-wrap gap-3">
            {data.rewards.map((r) => (
              <li
                key={r}
                className="bg-violet-100 rounded px-4 py-1 text-violet-700 font-medium shadow"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-gradient-to-r from-violet-400 via-violet-500 to-pink-400 text-white py-2 rounded font-semibold shadow cursor-pointer hover:from-pink-400 hover:via-violet-500 hover:to-violet-400 transition duration-300"
        >
          Logout
        </button>

        <Link
          to="/leaderboard"
          className="mt-6 inline-block w-full text-center bg-gradient-to-r from-purple-600 to-violet-700 hover:from-violet-700 hover:to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
        >
          View Leaderboard
        </Link>
      </div>
    </div>
  );
}
