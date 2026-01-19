
import { FaTasks } from "react-icons/fa";

export default function Logo({ color = "", className = "" }: { color?: string; className?: string }) {
  return (
    <span
      className={`flex items-center gap-2 text-2xl font-extrabold tracking-tight select-none font-sans ${className}`}
      style={{ fontFamily: 'var(--font-geist-sans), var(--font-sans), sans-serif' }}
    >
      <FaTasks className="text-3xl drop-shadow-sm" color={color || undefined} />
      TaskManager
    </span>
  );
}
