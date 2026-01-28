"use client";

import { useState } from "react";

export default function TweetPage() {
  const [tweet, setTweet] = useState(
    `Day ${Math.floor(Math.random() * 7) + 1} building on Base 🔵

Exploring Base ecosystem & completing airdrop tasks.

Still early 👀

Built with BaseBoost`
  );

  function shareOnX() {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweet
    )}`;
    window.open(url, "_blank");
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        Share Your Base Progress 🐦
      </h1>

      <textarea
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        className="w-full max-w-xl h-40 bg-gray-900 border border-gray-700 rounded-lg p-4 text-white mb-4"
      />

      <button
        onClick={shareOnX}
        className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
      >
        Share on X
      </button>
    </main>
  );
}
