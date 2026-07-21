export default function LogoMark({ className = "h-8 w-auto", alt = "Mota Uniforms" }) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      className={`object-contain ${className}`}
      draggable={false}
    />
  );
}
