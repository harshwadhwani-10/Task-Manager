import { FaTimes } from "react-icons/fa";

export default function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  message = "Are you sure?",
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
}) {
  if (!open) return null;
  return (
      <div className="fixed inset-0 z-50">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all" />
        <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-8 w-full max-w-sm relative border border-zinc-200 dark:border-zinc-800 text-center animate-fadeInScale">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 text-xl"
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold text-primary mb-4">Confirm</h2>
        <p className="mb-6 text-zinc-700 dark:text-zinc-200">{message}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
        </div>
    </div>
  );
}
