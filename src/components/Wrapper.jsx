export default function Wrapper({ className = "", children, ...rest }) {
  return (
    <div
      className={`w-full max-w-300 mx-4 mb-8 flex flex-col items-center gap-8 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
