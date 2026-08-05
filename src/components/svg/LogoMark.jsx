/**
 * Brand logo. Pass `onLightBg` when the logo sits on a white or cream
 * surface so the dark artwork is used instead of the light one.
 */
export default function LogoMark({
  className = "h-8 w-auto",
  alt = "Mota Uniforms",
  onLightBg = false,
}) {
  return (
    <img
      src={onLightBg ? "/darklogo.png" : "/logo.png"}
      alt={alt}
      className={`object-contain ${className}`}
      draggable={false}
    />
  );
}
