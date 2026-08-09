import { createContext, useCallback, useContext, useMemo, useState } from "react";
import QuoteModal from "../components/ui/QuoteModal";

const QuoteContext = createContext(null);

/**
 * Hosts a single quote modal for the whole app, so any card or button can
 * request a quote without each page tracking its own modal state.
 */
export function QuoteProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState(null);

  const openQuote = useCallback((nextSubject = null) => {
    setSubject(nextSubject);
    setOpen(true);
  }, []);

  const closeQuote = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openQuote, closeQuote }), [openQuote, closeQuote]);

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteModal open={open} subject={subject} onClose={closeQuote} />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) {
    throw new Error("useQuote must be used inside a QuoteProvider");
  }
  return ctx;
}
