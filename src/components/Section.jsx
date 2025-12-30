export default function Section({ className = "", children, ...rest }) {
  return (
    <section
      className={`w-full flex justify-center${
        className ? " " + className : ""
      }`}
      {...rest}
    >
      {children}
    </section>
  );
}
