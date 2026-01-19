
"use client";


import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";
import { useState } from "react";
import TaskDialog from "../../components/TaskDialog";
import ConfirmDialog from "../../components/ConfirmDialog";


import TaskStatusIcon from "../../components/TaskStatusIcon";

type Status = "TODO" | "IN_PROGRESS" | "COMPLETED";
interface Task {
  id: number;
  title: string;
  description: string;
  status: Status;
}

const initialTasks: Task[] = [
  { id: 1, title: "Design UI for dashboard", description: "Create wireframes and color palette", status: "IN_PROGRESS" },
  { id: 2, title: "Implement authentication", description: "Add login/signup with JWT", status: "TODO" },
  { id: 3, title: "Set up database schema", description: "Prisma models for users/tasks", status: "COMPLETED" },
];


export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [taskForm, setTaskForm] = useState<{ title: string; description: string; status: Status }>({ title: "", description: "", status: "TODO" });
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (taskForm.title.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: taskForm.title.trim(),
          description: taskForm.description.trim(),
          status: taskForm.status,
        },
      ]);
      setTaskForm({ title: "", description: "", status: "TODO" });
      setDialogOpen(false);
    }
  };

  const handleEdit = () => {
    if (editTaskId !== null && taskForm.title.trim()) {
      setTasks(tasks.map((task) =>
        task.id === editTaskId
          ? { ...task, ...taskForm }
          : task
      ));
      setEditDialogOpen(false);
      setEditTaskId(null);
      setTaskForm({ title: "", description: "", status: "TODO" });
    }
  };

  const handleDelete = () => {
    if (deleteId !== null) {
      setTasks(tasks.filter((task) => task.id !== deleteId));
      setConfirmOpen(false);
      setDeleteId(null);
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="flex-1 flex flex-col items-center px-4 py-20 w-full">
        <div className="w-full max-w-2xl bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="relative w-full">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              onClick={() => { setDialogOpen(true); setTaskForm({ title: "", description: "", status: "TODO" }); }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white dark:text-zinc-900 font-semibold shadow hover:bg-primary/90 transition-colors mt-4 sm:mt-0"
              aria-label="Add Task"
            >
              <FaPlus />
              Add
            </button>
          </div>
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {filteredTasks.length === 0 ? (
              <li className="py-6 text-center text-zinc-500 dark:text-zinc-400">No tasks found.</li>
            ) : (
              filteredTasks.map((task) => (
                <li key={task.id} className="flex items-center justify-between py-4 group gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <TaskStatusIcon status={task.status as Status} />
                    <div className="flex flex-col min-w-0">
                      <span className="text-lg text-zinc-800 dark:text-zinc-100 font-semibold truncate">{task.title}</span>
                      {task.description && (
                        <span className="text-sm text-zinc-500 dark:text-zinc-300 truncate">{task.description}</span>
                      )}
                      <span className="text-xs mt-1 px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 w-fit font-mono tracking-wide">
                        {task.status.replace("_", " ")}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => {
                        setEditTaskId(task.id);
                        setTaskForm({ title: task.title, description: task.description, status: task.status as Status });
                        setEditDialogOpen(true);
                      }}
                      className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-primary"
                      aria-label="Edit Task"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => {
                        setDeleteId(task.id);
                        setConfirmOpen(true);
                      }}
                      className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/40 text-red-500"
                      aria-label="Delete Task"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
        {/* Add Task Dialog */}
        <TaskDialog
          open={dialogOpen}
          onClose={() => { setDialogOpen(false); setTaskForm({ title: "", description: "", status: "TODO" }); }}
          onSubmit={handleAdd}
          task={taskForm}
          setTask={setTaskForm}
          title="Add Task"
        />
        {/* Edit Task Dialog */}
        <TaskDialog
          open={editDialogOpen}
          onClose={() => { setEditDialogOpen(false); setEditTaskId(null); setTaskForm({ title: "", description: "", status: "TODO" }); }}
          onSubmit={handleEdit}
          task={taskForm}
          setTask={setTaskForm}
          title="Edit Task"
        />
        {/* Delete Confirm Dialog */}
        <ConfirmDialog
          open={confirmOpen}
          onClose={() => { setConfirmOpen(false); setDeleteId(null); }}
          onConfirm={handleDelete}
          message="Are you sure you want to delete this task?"
        />
      </main>
    </div>
  );
}
