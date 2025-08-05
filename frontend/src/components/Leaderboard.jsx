// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import instance from "../api/axios";

// export default function Leaderboard() {
//   const [leaders, setLeaders] = useState([]);

//   useEffect(() => {
//     instance.get("/api/leaderboard").then((res) => setLeaders(res.data));
//   }, []);

//   return (
//     <div className="flex flex-col items-center py-12 min-h-screen bg-gradient-to-tr from-blue-50 to-pink-100">
//       <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl p-8 ring-1 ring-violet-300">
//         <h2 className="text-2xl text-center font-extrabold text-violet-700 mb-8 tracking-wide">
//           Top Interns Leaderboard
//         </h2>
//         <table className="w-full table-auto border-collapse rounded-lg overflow-hidden">
//           <thead>
//             <tr className="bg-gradient-to-r from-purple-600 to-violet-700 text-white uppercase tracking-wide">
//               <th className="py-3 px-6 text-left">Sr.</th>
//               <th className="py-3 px-6 text-left">Name</th>
//               <th className="py-3 px-6 text-left">Referral</th>
//               <th className="py-3 px-6 text-right">Donations</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaders.map((l, i) => (
//               <tr
//                 key={l.referralCode}
//                 className={`${
//                   i % 2 === 0 ? "bg-violet-50" : "bg-white"
//                 } hover:bg-violet-100 transition-colors duration-300 ${
//                   i < 3
//                     ? "font-semibold text-violet-700"
//                     : "font-medium text-pink-500"
//                 }`}
//               >
//                 <td className="py-3 px-6">{i + 1}</td>
//                 <td className="py-3 px-6">{l.name}</td>
//                 <td className="py-3 px-6 font-mono">{l.referralCode}</td>
//                 <td className="py-3 px-6 text-right text-green-500">
//                   ₹{(l.totalDonations ?? 0).toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Link
//         to="/dashboard"
//         className="mt-6 mb-6 inline-block w-full max-w-xl text-center bg-gradient-to-r from-purple-600 to-violet-700 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
//       >
//         Back to Dashboard
//       </Link>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import instance from "../api/axios";
export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    instance.get("/api/leaderboard").then((res) => setLeaders(res.data));
  }, []);

  return (
    <div className="flex flex-col items-center py-6 px-4 sm:px-6 md:px-8 min-h-screen bg-gradient-to-tr from-blue-50 to-pink-100">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl p-4 sm:p-8 ring-1 ring-violet-300">
        <h2 className="text-xl sm:text-2xl text-center font-extrabold text-violet-700 mb-6 tracking-wide">
          Top Interns Leaderboard
        </h2>
        {/* Scrollable container */}
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-purple-600 to-violet-700 text-white uppercase tracking-wide text-xs sm:text-base">
                <th className="py-2 px-3 text-left">Sr.</th>
                <th className="py-2 px-3 text-left">Name</th>
                <th className="py-2 px-3 text-left">Referral</th>
                <th className="py-2 px-3 text-right">Donations</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((l, i) => (
                <tr
                  key={l.referralCode}
                  className={`${
                    i % 2 === 0 ? "bg-violet-50" : "bg-white"
                  } hover:bg-violet-100 transition-colors duration-300 ${
                    i < 3
                      ? "font-semibold text-violet-700"
                      : "font-medium text-pink-500"
                  } text-xs sm:text-base`}
                >
                  <td className="py-2 px-3">{i + 1}</td>
                  <td className="py-2 px-3">{l.name}</td>
                  <td className="py-2 px-3 font-mono">{l.referralCode}</td>
                  <td className="py-2 px-3 text-right text-green-500">
                    ₹{(l.totalDonations ?? 0).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Link
        to="/dashboard"
        className="mt-6 mb-6 inline-block w-full max-w-xl text-center bg-gradient-to-r from-purple-600 to-violet-700 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
