export default function PageMeta({ image, path, title, description, noindex }) {
  return (
    <>
      <title>{title}</title>
      {noindex && <meta name="robots" content="noindex" />}

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content={title} />
      <link rel="canonical" href={`${window.location.origin}/${path}`} />
      {description && <meta name="description" content={description} />}

      {/* <!-- Open Graph --> */}
      <meta property="og:url" content={`${window.location.origin}/${path}`} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1911" />
      <meta property="og:image:height" content="819" />

      {/* <!-- Twitter --> */}
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={`${window.location.origin}/${path}`} />
      {description && <meta name="twitter:description" content={description} />}
    </>
  );
}
