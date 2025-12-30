export default function Image({
  src,
  alt = "",
  title = "",
  loading = "lazy", /** lazy y eager **/
  width,
  height,
  size,
  className = "",
  containerClass = "",
  ...rest
}) {
  const resolvedWidth = size || width;
  const resolvedHeight = size || height;

  return (
    <div
      className={`size-full flex items-center justify-center overflow-hidden ${containerClass}`}
    >
      <img
        src={src}
        alt={alt}
        title={title}
        loading={loading}
        width={resolvedWidth}
        height={resolvedHeight}
        onError={(e) => {
          e.target.onError = null;
          e.currentTarget.src = "/images/banner.png";
        }}
        {...rest}
        className={`size-full bg-neutral-100 dark:bg-neutral-900 object-cover object-center select-none pointer-events-none ${className}`}
      />
    </div>
  );
}
