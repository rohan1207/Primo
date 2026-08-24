import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import EnquiryForm from "./EnquiryForm";

export default function QuoteModal({ open, onClose, subject }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Get a quote"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-mota-ink/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[92svh] w-full flex-col overflow-hidden rounded-t-[1.75rem] bg-mota-cream shadow-float sm:max-h-[88svh] sm:max-w-lg sm:rounded-[2rem]"
            data-lenis-prevent
          >
            {/* Grab handle, mobile affordance */}
            <span className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-full bg-mota-ink/15 sm:hidden" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-mota-line bg-white text-mota-ink transition-colors hover:border-[#086dbe]/40 hover:bg-[#086dbe] hover:text-white sm:right-5 sm:top-5"
            >
              <HiX className="h-4 w-4" />
            </button>

            <div className="overflow-y-auto px-5 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-7">
              <span className="mota-eyebrow-pill">Get a Quote</span>
              <h2 className="mota-title-card mt-3 pr-10 sm:text-2xl">
                Tell us what you need
              </h2>
              {subject && (
                <p className="mt-2 text-sm text-mota-mist">
                  Enquiry for{" "}
                  <span className="font-semibold text-[#086dbe]">{subject}</span>
                </p>
              )}

              <EnquiryForm
                source="quote"
                subject={subject}
                showMessage
                className="mt-5 !rounded-[1.5rem] !border-mota-line !bg-white !p-5 !shadow-none sm:!p-6"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
