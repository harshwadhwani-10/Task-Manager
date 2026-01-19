import { FaTasks } from "react-icons/fa";

export default function Logo() {
  return (
    <span className="flex items-center gap-2 text-2xl font-extrabold text-primary tracking-tight select-none font-sans" style={{ fontFamily: 'var(--font-geist-sans), var(--font-sans), sans-serif' }}>
      <FaTasks className="text-3xl text-primary drop-shadow-sm" />
      TaskManager
    </span>
  );
}
