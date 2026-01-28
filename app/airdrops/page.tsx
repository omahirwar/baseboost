"use client";

import { useState } from "react";

const projects = [
  {
    name: "Zora",
    tasks: [
      "Connect wallet",
      "Mint an NFT",
      "Post on X",
      "Bridge ETH to Base",
    ],
  },
  {
    name: "Farcaster",
    tasks: [
      "Create account",
      "Post first cast",
      "Follow 5 users",
    ],
  },
];

export default function AirdropsPage() {
  const [completed, setCompleted] = useState<string[]>([]);

  function toggleTask(task: string) {
    setCompleted((prev) =>
      prev.includes(task)
        ? prev.filter((t) => t !== task)
        : [...prev, task]
    );
  }

  const totalTasks = projects.reduce(
    (acc, p) => acc + p.tasks.length,
    0
  );
  const progress = Math.round((completed.length / totalTasks) * 100);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        Base Airdrop Tracker 🔵
      </h1>

      <div className="mb-8">
        <div className="w-full bg-gray-800 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Progress: {progress}%
        </p>
      </div>

      {projects.map((project) => (
        <div
          key={project.name}
          className="mb-6 border border-gray-700 rounded-lg p-4"
        >
          <h2 className="text-xl font-semibold mb-3">
            {project.name}
          </h2>

          {project.tasks.map((task) => (
            <label
              key={task}
              className="flex items-center gap-3 mb-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={completed.includes(task)}
                onChange={() => toggleTask(task)}
              />
              <span>{task}</span>
            </label>
          ))}
        </div>
      ))}
    </main>
  );
}
