"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      
      <h1 className="text-5xl font-bold mb-4 text-blue-500">
        BaseBoost 🔵
      </h1>

      <p className="max-w-xl text-gray-300 mb-8">
        Track Base ecosystem airdrops, complete missions, play games, 
        and share your progress on X — all in one place.
      </p>

      {/* Primary Actions */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
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

      {/* Secondary Links */}
      <div className="flex gap-6 text-sm">
        <a href="/tweet" className="text-blue-400 hover:underline">
          Generate Base Tweet →
        </a>

        <a href="/game" className="text-blue-400 hover:underline">
          View Game Missions →
        </a>
      </div>

      <p className="mt-12 text-sm text-gray-500">
        Wallet-based onboarding • XP & Rewards • Built on Base
      </p>

    </main>
  );
}
