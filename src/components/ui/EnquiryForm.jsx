import { useState } from "react";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import CtaButton from "./CtaButton";

export default function EnquiryForm({ variant = "light", className = "", showMessage = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-mota-line bg-white px-4 py-3.5 text-sm text-mota-ink outline-none transition-all placeholder:text-mota-mist/50 focus:border-[#086dbe] focus:ring-2 focus:ring-[#086dbe]/15";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex flex-col items-center justify-center rounded-3xl p-10 text-center glass-light ${className}`}
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-mota-blue/10 text-mota-blue">
          <HiCheck className="h-8 w-8" />
        </div>
        <h3 className="mota-title-card">Thank You!</h3>
        <p className="mota-body mt-3">We&apos;ll get back to you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-3xl p-6 sm:p-8 glass-light ${className}`}
      data-reveal
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-4">
          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-mota-mist">
              Your Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-mota-mist">
              Phone Number
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-mota-mist">
            Email Address
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
        {showMessage && (
          <div className="sm:col-span-2">
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-mota-mist">
              Message
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
              placeholder="Tell us about your requirements..."
            />
          </div>
        )}
        <div className="sm:col-span-2">
          <CtaButton type="submit" variant="accent" fullWidth className="sm:!w-auto">
            Submit Enquiry
          </CtaButton>
        </div>
      </div>
    </form>
  );
}
