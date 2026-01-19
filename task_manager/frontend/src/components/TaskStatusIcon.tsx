import { FaRegCircle, FaSpinner, FaCheckCircle } from "react-icons/fa";

export default function TaskStatusIcon({ status }: { status: "TODO" | "IN_PROGRESS" | "COMPLETED" }) {
  if (status === "COMPLETED")
    return <FaCheckCircle className="text-green-500 text-xl" title="Completed" />;
  if (status === "IN_PROGRESS")
    return <FaSpinner className="text-yellow-500 text-xl animate-spin" title="In Progress" />;
  return <FaRegCircle className="text-zinc-400 text-xl" title="To Do" />;
}
