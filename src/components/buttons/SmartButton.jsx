import { Link } from "react-router-dom";

export default function SmartButton({
  children,
  variant = "primary",
  font = "grotesk",
  className = "",
  full = false,
  href,
  to,
  ...props
}) {
  const fonts = {
    sans: "font-sans",
    text: "font-text",
    mono: "font-mono",
    code: "font-code",
    grotesk: "font-grotesk",
    jetBrains: "font-mono-code",
  };
  const base =
    "min-w-max h-11 px-4 flex items-center justify-center gap-2 cursor-pointer rounded-md font-normal text-sm transition-all duration-300 ease-out active:underline hover:underline select-none";

  const variants = {
    primary:
      "bg-neutral-950 hover:bg-neutral-800 dark:bg-neutral-50 dark:hover:bg-neutral-300 text-neutral-50 hover:text-neutral-300 dark:text-neutral-950 dark:hover:text-neutral-800",
    secondary:
      "bg-transparent border border-neutral-950 dark:border-neutral-50 text-neutral-950 dark:text-neutral-50",
    gray: "text-neutral-50 bg-neutral-600/75 hover:bg-neutral-700/85 dark:bg-neutral-700/50 dark:hover:bg-neutral-600/75",
    text: " text-neutral-400 hover:text-neutral-200",
    border:
      "bg-transparent hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800",
  };

  const fullClass = full ? "w-full" : "w-full md:w-auto";

  const finalClassName = `${fullClass} ${base} ${fonts[font]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClassName} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalClassName}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={finalClassName} {...props}>
      {children}
    </button>
  );
}
