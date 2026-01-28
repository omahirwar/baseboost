"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      <h1 className="text-5xl font-bold mb-4 text-blue-500">
        BaseBoost 🔵
      </h1>

      <p className="text-center max-w-xl text-gray-300 mb-8">
        Track Base ecosystem airdrops, complete tasks, 
        and share your progress on X — all in one place.
      </p>

      <div className="flex gap-4">
        {/* REAL WALLET CONNECT BUTTON */}
        <ConnectButton />

        <button className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800 transition">
          Explore Airdrops
        </button>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        Built on Base • Early Builder Tool
      </p>

    </main>
  );
}
