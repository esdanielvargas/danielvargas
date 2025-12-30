export default function PageTitle(props) {
  const {
    // path,
    // title,
    header,
    description,
    // noindex,
    children,
    positionX = "",
  } = props;

  const positionsX = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-center md:justify-end",
    between: "justify-between",
  };

  return (
    <div className="w-full min-h-60 relative flex flex-col items-center justify-center gap-6 border-b border-neutral-200 dark:border-neutral-700/50">
      {/* <title>{title && title}</title> */}
      {/* <link rel="canonical" href={`${window.location.origin}${path}`} /> */}
      {/* {noindex && <meta name="robots" content="noindex" />} */}
      <div
        className={`w-full flex flex-col items-center justify-center gap-4 ${
          positionX ? "mt-8" : ""
        }`}
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-balance line-clamp-3 font-sans">
          {header || "Título de la Página"}
        </h1>
        {description && (
          <span className="text-sm md:text-md lg:text-base text-center text-balance text-neutral-600 dark:text-neutral-400 line-clamp-3 font-text">
            {description || "Description de la página"}
          </span>
        )}
      </div>
      {positionX && (
        <div
          className={`w-full flex flex-wrap items-center ${positionsX[positionX]} gap-2`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
