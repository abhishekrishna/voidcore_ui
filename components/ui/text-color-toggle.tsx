import { useState } from "react";

const COLORS = [
  "text-white",
  "text-black",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-red-500",
  "text-pink-500",
  "text-purple-500",
  "text-gray-800",
  "text-gray-200"
];

export default function TextColorToggle({ onChange }: { onChange: (color: string) => void }) {
  const [idx, setIdx] = useState(0);
  return (
    <button
      className={`ml-auto mb-2 px-2 py-1 rounded border border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700`}
      onClick={() => {
        const next = (idx + 1) % COLORS.length;
        setIdx(next);
        onChange(COLORS[next]);
      }}
      aria-label="Toggle text color"
      type="button"
    >
      <span className={`inline-block w-4 h-4 rounded-full align-middle mr-2 ${COLORS[idx]}`}>A</span>
      Color
    </button>
  );
}
