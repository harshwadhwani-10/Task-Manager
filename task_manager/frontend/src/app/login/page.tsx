"use client";

import { FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add real authentication logic
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    // Simulate login
    router.push("/tasks");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-white dark:from-gray-900 dark:to-gray-800 relative">
      <button
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-900/90 border border-indigo-200 dark:border-gray-700 rounded-full shadow hover:bg-indigo-50 dark:hover:bg-gray-800 text-indigo-700 dark:text-indigo-200 font-semibold transition-all duration-150 z-10"
        onClick={() => router.push("/")}
        aria-label="Go to Home"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Home
      </button>
      <div className="w-full max-w-md bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg p-8 flex flex-col items-center">
        <FaSignInAlt className="mb-4 text-indigo-600 dark:text-indigo-300" size={64} />
        <h1 className="text-3xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">Sign In</h1>
        <p className="mb-6 text-gray-500 dark:text-gray-400">Welcome back! Please login to your account.</p>
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
        <form className="w-full" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="mb-2 text-red-500 text-sm">{error}</div>}
          <button type="submit" className="w-full py-2 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition">Login</button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600 dark:text-gray-300">Don't have an account?</span>
          <button
            className="ml-2 text-indigo-600 hover:underline dark:text-indigo-400 font-medium"
            onClick={() => router.push("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
