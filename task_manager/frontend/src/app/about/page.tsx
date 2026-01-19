"use client";



export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-linear-to-br from-primary/10 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-950">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 w-full">
        <section className="w-full max-w-2xl mx-auto bg-white/95 dark:bg-zinc-900/95 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-10 flex flex-col items-center text-center animate-fadeInScale">
          <img src="/file.svg" alt="Task Manager App" className="w-24 h-24 object-contain rounded-xl shadow border-2 border-primary/20 bg-zinc-50 dark:bg-zinc-800 mb-6" />
          <h1 className="text-4xl font-extrabold text-primary mb-2 tracking-tight drop-shadow">About</h1>
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">Harsh Wadhwani</h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg mb-6">This project is a modern, professional task management solution built with Next.js, Tailwind CSS, and shadcn/ui. Organize your work, track your progress, and collaborate efficiently with a beautiful, responsive interface and robust features.</p>
        </section>
      </main>
    </div>
  );
}
