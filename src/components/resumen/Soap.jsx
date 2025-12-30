export default function Soap({ title }) {
  return (
    <div className="h-6 px-1.5 flex items-center justify-center text-sm/6 font-grotesk text-neutral-600 dark:text-neutral-300 rounded-md border hover:bg-neutral-300/50 dark:hover:bg-neutral-500/50 cursor-pointer transition-all duration-300 ease-out">
      {title}
    </div>
  );
}
