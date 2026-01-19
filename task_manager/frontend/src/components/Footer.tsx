export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-zinc-900 py-6 px-8 text-center text-zinc-500 text-sm border-t border-zinc-200 dark:border-zinc-700 mt-12">
      &copy; {new Date().getFullYear()} TaskManager. All rights reserved.
    </footer>
  );
}
