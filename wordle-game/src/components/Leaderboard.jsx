import React from "react";
import LeaderHeader from "./LeaderHeader";
import { useEffect, useState, useRef } from "react";

const Leaderboard = () => {
  const rank = useRef(false);
  const [currValue, setValue] = useState([]);

  useEffect(() => {
    async function getRank() {
      if (rank.current) return;
      rank.current = true;
      const response = await fetch("https://termle-server.vercel.app/leaderboard");
      let values = await response.json();
      setValue(values);
    }
    getRank();
  }, []);

  return (
    <>
    <LeaderHeader/>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Wins</th>
                <th>Attempts</th>
              </tr>
            </thead>
            <tbody>
              {currValue.map((players, index) => {
                return (
                  <>
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{players.name}</td>
                      <td>{players.wins}</td>
                      <td>{players.attempts}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Leaderboard;
