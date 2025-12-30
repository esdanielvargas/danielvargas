export default function Heading({ title, children }) {
  return (
    <div className="w-full py-1.5 flex items-center justify-start gap-2 border-y">
      {children}
      <div className="w-full text-left font-bold text-base font-grotesk uppercase">{title}</div>
    </div>
  );
}
