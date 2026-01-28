"use client";

import { useState } from "react";
import { useAccount } from "wagmi";

type Mission = {
  id: number;
  title: string;
  description: string;
  xp: number;
};

const MISSIONS: Mission[] = [
  {
    id: 1,
    title: "Explore a Base dApp",
    description: "Open any dApp built on Base and explore its features.",
    xp: 20,
  },
  {
    id: 2,
    title: "Share a Base Tweet",
    description: "Post a tweet about Base or a Base dApp on X.",
    xp: 15,
  },
  {
    id: 3,
    title: "Onchain Action",
    description: "Do any onchain action on Base (swap, mint, bridge).",
    xp: 25,
  },
];

export default function GamePage() {
  const { address, isConnected } = useAccount();
  const [completed, setCompleted] = useState<number[]>([]);
  const totalXP = completed.reduce((sum, id) => {
    const m = MISSIONS.find((x) => x.id === id);
    return sum + (m ? m.xp : 0);
  }, 0);

  function completeMission(id: number) {
    if (!completed.includes(id)) {
      setCompleted([...completed, id]);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-2">
          Base Treasure Hunt 🗺️
        </h1>
        <p className="text-gray-400 mb-6">
          Complete missions, earn XP, and climb the leaderboard.
        </p>

        {/* Wallet Status */}
        <div className="mb-8 p-4 rounded-lg border border-gray-800 bg-gray-900">
          {isConnected ? (
            <>
              <p className="text-sm text-gray-400">Connected Wallet</p>
              <p className="font-mono text-sm">
                {address?.slice(0, 6)}…{address?.slice(-4)}
              </p>
            </>
          ) : (
            <p className="text-red-400">
              Please connect your wallet to play.
            </p>
          )}
        </div>

        {/* XP Counter */}
        <div className="mb-8 flex items-center justify-between p-4 rounded-lg bg-blue-600/10 border border-blue-600/30">
          <span className="text-lg font-semibold">Total XP</span>
          <span className="text-2xl font-bold text-blue-400">
            {totalXP}
          </span>
        </div>

        {/* Missions */}
        <div className="grid md:grid-cols-2 gap-6">
          {MISSIONS.map((mission) => {
            const done = completed.includes(mission.id);
            return (
              <div
                key={mission.id}
                className="p-5 rounded-xl border border-gray-800 bg-gray-900"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {mission.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {mission.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">
                    +{mission.xp} XP
                  </span>

                  {done ? (
                    <span className="text-green-400 font-semibold">
                      Completed ✓
                    </span>
                  ) : (
                    <button
                      onClick={() => completeMission(mission.id)}
                      disabled={!isConnected}
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition disabled:opacity-40"
                    >
                      Mark Completed
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Rewards distributed weekly • Built on Base
        </p>
      </div>
    </main>
  );
}
