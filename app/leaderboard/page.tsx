"use client";

import { useAccount } from "wagmi";

/**
 * MVP LEADERBOARD (Static + Demo)
 * Next step me isko real XP data se connect karenge
 */
const LEADERBOARD = [
  { rank: 1, wallet: "0xA1b3...9F2", xp: 120 },
  { rank: 2, wallet: "0xB7c8...88C", xp: 100 },
  { rank: 3, wallet: "0x92Fa...E31", xp: 80 },
  { rank: 4, wallet: "0x44Bd...C12", xp: 60 },
];

export default function LeaderboardPage() {
  const { isConnected, address } = useAccount();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-2">
          Leaderboard 🏆
        </h1>
        <p className="text-gray-400 mb-8">
          Top Base Treasure Hunt players this week
        </p>

        {/* Leaderboard Table */}
        <div className="border border-gray-800 rounded-xl overflow-hidden mb-10">
          {LEADERBOARD.map((user) => (
            <div
              key={user.rank}
              className="flex items-center justify-between px-5 py-4 border-b border-gray-800 last:border-none"
            >
              <span className="font-semibold">
                #{user.rank}
              </span>

              <span className="font-mono text-sm text-gray-300">
                {user.wallet}
              </span>

              <span className="text-blue-400 font-semibold">
                {user.xp} XP
              </span>
            </div>
          ))}
        </div>

        {/* Your Status */}
        <div className="mb-10 p-4 rounded-lg bg-gray-900 border border-gray-800">
          {isConnected ? (
            <>
              <p className="text-sm text-gray-400 mb-1">
                Your Wallet
              </p>
              <p className="font-mono text-sm">
                {address?.slice(0, 6)}…{address?.slice(-4)}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Play Treasure Hunt to climb the leaderboard 🚀
              </p>
            </>
          ) : (
            <p className="text-red-400">
              Connect wallet to join the leaderboard
            </p>
          )}
        </div>

        {/* Rewards Section */}
        <div className="p-5 rounded-xl border border-blue-600/30 bg-blue-600/10">
          <h2 className="text-xl font-semibold mb-3 text-blue-400">
            Weekly Rewards 🎁
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>🥇 Rank 1: NFT / USDC Reward</li>
            <li>🥈 Rank 2: NFT / Whitelist</li>
            <li>🥉 Rank 3: Whitelist Spot</li>
          </ul>
          <p className="text-xs text-gray-400 mt-3">
            Rewards are distributed manually after verification.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex gap-6 justify-center text-sm">
          <a href="/game" className="text-blue-400 hover:underline">
            ← Back to Game
          </a>
          <a href="/" className="text-blue-400 hover:underline">
            Home
          </a>
        </div>
      </div>
    </main>
  );
}
