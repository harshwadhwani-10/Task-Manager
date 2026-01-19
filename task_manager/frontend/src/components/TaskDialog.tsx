import { FaTimes } from "react-icons/fa";

type Status = "TODO" | "IN_PROGRESS" | "COMPLETED";

export default function TaskDialog({
  open,
  onClose,
  onSubmit,
  task,
  setTask,
  title = "Add Task",
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  task: { title: string; description: string; status: Status };
  setTask: (t: { title: string; description: string; status: Status }) => void;
  title?: string;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-8 w-full max-w-md relative border border-zinc-200 dark:border-zinc-800 animate-fadeInScale">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 text-xl"
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">{title}</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-zinc-700 dark:text-zinc-200">Title <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={task.title}
              onChange={e => setTask({ ...task, title: e.target.value })}
              placeholder="Finish CN assignment"
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary"
              required
              maxLength={100}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-zinc-700 dark:text-zinc-200">Description / Notes</label>
            <textarea
              value={task.description}
              onChange={e => setTask({ ...task, description: e.target.value })}
              placeholder="Complete RIP configuration and screenshots"
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary min-h-20"
              maxLength={500}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-zinc-700 dark:text-zinc-200">Status</label>
            <select
              value={task.status}
              onChange={e => setTask({ ...task, status: e.target.value as Status })}
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="TODO">TODO</option>
              <option value="IN_PROGRESS">IN PROGRESS</option>
              <option value="COMPLETED">COMPLETED</option>
            </select>
          </div>
          <button
            onClick={onSubmit}
            className="w-full px-4 py-2 rounded-lg bg-primary text-white dark:text-zinc-900 font-semibold shadow hover:bg-primary/90 transition-colors mt-2"
          >
            {title}
          </button>
        </div>
      </div>
    </div>
  );
}
