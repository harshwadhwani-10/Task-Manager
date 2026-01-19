

import { FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-linear-to-br from-primary/5 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-950">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 w-full">
        <section className="w-full max-w-2xl bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-10 mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-2 drop-shadow-sm">Contact</h1>
          <p className="text-zinc-700 dark:text-zinc-200 mb-6">Have questions, feedback, or want to collaborate? Reach out below!</p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary" />
            <textarea placeholder="Your Message" rows={4} className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary" />
            <button type="submit" className="mt-2 px-8 py-3 rounded-full bg-primary text-white dark:text-zinc-900 font-semibold shadow hover:bg-primary/90 transition-colors">Send Message</button>
          </form>
        </section>
        <section className="w-full max-w-2xl bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-8 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">Or connect with me:</h3>
          <div className="flex justify-center gap-8 mt-2">
            <a href="mailto:harshwadhwani@email.com" className="text-primary hover:text-primary/80 transition-colors text-3xl" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://github.com/harshwadhwani" target="_blank" rel="noopener" className="text-primary hover:text-primary/80 transition-colors text-3xl" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
