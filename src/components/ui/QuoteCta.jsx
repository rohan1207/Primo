import { HiArrowRight, HiOutlineExternalLink } from "react-icons/hi";
import CtaButton from "./CtaButton";
import { useQuote } from "../../context/QuoteContext";

/**
 * Card-level call to action. Opens the quote modal for the card's subject, or
 * links out when the category is served by a partner site.
 * Labels shorten on phones, where "Get a Quote" is too wide for a card.
 */
export default function QuoteCta({
  subject,
  href,
  external = false,
  variant = "pill",
  className = "",
}) {
  const { openQuote } = useQuote();

  const short = external ? "Visit" : "Quote";
  const long = external ? "Visit The Uniform Lab" : "Get a Quote";

  const label = (
    <>
      <span className="sm:hidden">{short}</span>
      <span className="hidden sm:inline">{long}</span>
    </>
  );

  if (variant === "pill") {
    return external ? (
      <CtaButton href={href} external variant="accent" className={className}>
        {label}
      </CtaButton>
    ) : (
      <CtaButton
        type="button"
        onClick={() => openQuote(subject)}
        variant="accent"
        className={className}
      >
        {label}
      </CtaButton>
    );
  }

  const linkClasses = `group/cta inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#086dbe] transition-colors duration-300 hover:text-mota-blue sm:text-[13px] ${className}`;
  const Icon = external ? HiOutlineExternalLink : HiArrowRight;
  const icon = (
    <Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
      {label}
      {icon}
    </a>
  ) : (
    <button type="button" onClick={() => openQuote(subject)} className={linkClasses}>
      {label}
      {icon}
    </button>
  );
}
