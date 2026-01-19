"use client";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <section className="max-w-2xl w-full text-center space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Organize Your Work, <span className="text-primary">Boost Productivity</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
            Welcome to <span className="font-semibold">TaskManager</span> — your professional solution for managing tasks, tracking progress, and collaborating efficiently. Start organizing your work and achieve more every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/tasks" className="px-8 py-3 rounded-full bg-primary text-white dark:text-zinc-900 font-semibold shadow hover:bg-primary/90 transition-colors">Get Started</a>
            <a href="/about" className="px-8 py-3 rounded-full border border-primary text-primary dark:text-white font-semibold hover:bg-primary hover:text-white dark:bg-zinc-800 dark:hover:bg-primary dark:hover:text-zinc-900 transition-colors">Learn More</a>
          </div>
        </section>
      </main>
    </div>
  );
}

