import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

/**
 * Compact pill CTA with circle arrow, sized to content, not bulky.
 * variants: "accent" | "navy" | "white" | "outline"
 */
export default function CtaButton({
  to,
  href,
  children,
  variant = "accent",
  className = "",
  type,
  onClick,
  fullWidth = false,
  showArrow = true,
  external = false,
  download = false,
  disabled = false,
  /** Render as a plain span, for use inside an already-clickable parent */
  static: isStatic = false,
}) {
  const variants = {
    accent:
      "bg-[#086dbe] text-white shadow-[0_8px_20px_rgba(8,109,190,0.22)] hover:bg-mota-blue hover:shadow-[0_10px_24px_rgba(30,58,95,0.22)]",
    navy:
      "bg-mota-blue text-white shadow-[0_8px_20px_rgba(30,58,95,0.18)] hover:bg-[#086dbe] hover:shadow-[0_10px_24px_rgba(8,109,190,0.22)]",
    white:
      "bg-white text-mota-blue shadow-[0_6px_16px_rgba(30,58,95,0.1)] hover:bg-[#086dbe] hover:text-white",
    outline:
      "border border-mota-ink/15 bg-white text-mota-ink hover:border-mota-blue hover:bg-mota-blue/5 hover:text-mota-blue",
  };

  const arrowVariants = {
    accent: "bg-white text-[#086dbe] group-hover:bg-mota-cream",
    navy: "bg-white text-mota-blue group-hover:bg-mota-cream",
    white: "bg-[#086dbe]/12 text-[#086dbe] group-hover:bg-white group-hover:text-[#086dbe]",
    outline: "bg-mota-blue/10 text-mota-blue group-hover:bg-[#086dbe] group-hover:text-white",
  };

  const classes = [
    "group inline-flex w-fit max-w-full items-center justify-center rounded-full text-[12px] font-semibold leading-none transition-all duration-300 active:scale-[0.98] sm:text-[13px]",
    showArrow
      ? "gap-1.5 py-1 pl-3.5 pr-1 sm:gap-2 sm:py-1.5 sm:pl-4 sm:pr-1.5"
      : "gap-2 px-4 py-2 sm:px-5 sm:py-2.5",
    variants[variant],
    fullWidth ? "!w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      {showArrow && (
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 sm:h-7 sm:w-7 ${arrowVariants[variant]}`}
        >
          <HiArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </span>
      )}
    </>
  );

  if (isStatic) {
    return <span className={classes}>{content}</span>;
  }

  if (type === "submit" || type === "button") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${classes}${disabled ? " pointer-events-none opacity-60" : ""}`}
        disabled={disabled}
      >
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        {...(download
          ? { download: typeof download === "string" ? download : true }
          : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to || "/"} onClick={onClick} className={classes}>
      {content}
    </Link>
  );
}
