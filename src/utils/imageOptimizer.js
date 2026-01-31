export const getOptimizedImage = (src, width = 600) => {
  const isProd = import.meta.env.PROD; 

  if (!isProd) {
    return src;
  }
  
  return `/cdn-cgi/image/width=${width},format=auto,quality=80${src}`;
};