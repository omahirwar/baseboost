"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      
      <h1 className="text-5xl font-bold mb-4 text-blue-500">
        BaseBoost 🔵
      </h1>

      <p className="max-w-xl text-gray-300 mb-10">
        Track Base ecosystem airdrops, complete missions, play games,
        climb the leaderboard, and share your progress on X — all in one place.
      </p>

      {/* PRIMARY ACTIONS */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <ConnectButton showBalance={false} />

        <a
          href="/airdrops"
          className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800 transition"
        >
          Explore Airdrops
        </a>

        <a
          href="/game"
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          🎮 Play Treasure Hunt
        </a>
      </div>

      {/* SECONDARY LINKS */}
      <div className="flex flex-wrap gap-6 justify-center text-sm mb-6">
        <a href="/leaderboard" className="text-blue-400 hover:underline">
          🏆 View Leaderboard
        </a>

        <a href="/tweet" className="text-blue-400 hover:underline">
          🐦 Generate Base Tweet
        </a>
      </div>

      {/* FOOTER */}
      <p className="mt-10 text-sm text-gray-500">
        Wallet-based onboarding • XP & Rewards • Built on Base
      </p>

    </main>
  );
}
