export default function FalseHeader({ page = false }) {
  return (
    <>
      <div
        className={`w-full min-h-22.5 ${page ? "static" : "fixed"} top-0 z-50${
          page
            ? ""
            : " border-b border-neutral-200 dark:border-neutral-900 bg-neutral-50/75 dark:bg-neutral-950/75 backdrop-blur-xl"
        }`}
      ></div>
    </>
  );
}
