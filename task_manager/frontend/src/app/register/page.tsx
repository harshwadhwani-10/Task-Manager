"use client";

import { FaUserPlus } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    // Simulate registration
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary/5 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-950 relative">
      <button
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-primary text-white dark:text-zinc-900 font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all duration-150 z-10 border-none"
        onClick={() => router.push("/")}
        aria-label="Go to Home"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Home
      </button>
      <div className="w-full max-w-md bg-white/95 dark:bg-zinc-900/95 rounded-xl shadow-lg p-8 flex flex-col items-center">
        <FaUserPlus className="mb-4 text-primary" size={64} />
        <h1 className="text-3xl font-bold mb-2 text-primary">Register</h1>
        <p className="mb-6 text-zinc-600 dark:text-zinc-300">Create your account to get started.</p>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-2 mb-6 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition font-medium shadow-sm"
          onClick={() => {/* TODO: Add Google auth logic */}}
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>
        <div className="flex items-center w-full my-4">
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700" />
          <span className="mx-4 text-gray-400 font-semibold select-none">or</span>
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700" />
        </div>
        <form className="w-full" onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="mb-2 text-red-500 text-sm">{error}</div>}
          <button type="submit" className="w-full py-2 mt-2 bg-primary hover:bg-primary/90 text-white dark:text-zinc-900 font-semibold rounded-lg shadow transition">Register</button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600 dark:text-gray-300">Already have an account?</span>
          <button
            className="ml-2 text-indigo-600 hover:underline dark:text-indigo-400 font-medium"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
