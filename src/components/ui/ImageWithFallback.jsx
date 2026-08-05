import { useState } from "react";

/**
 * Renders `src`, and quietly swaps to `fallback` if the file is missing.
 * Lets new photography be dropped into /public without risking broken images.
 */
export default function ImageWithFallback({
  src,
  fallback,
  alt = "",
  className = "",
  ...rest
}) {
  const [failed, setFailed] = useState(false);
  const resolved = failed && fallback ? fallback : src;

  return (
    <img
      src={resolved}
      alt={alt}
      className={className}
      loading="lazy"
      draggable={false}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
