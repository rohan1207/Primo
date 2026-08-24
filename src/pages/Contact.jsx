import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { useScrollReveal } from "../hooks/useAnimations";
import CtaButton from "../components/ui/CtaButton";
import EnquiryForm from "../components/ui/EnquiryForm";
import CTABanner from "../components/ui/CTABanner";
import { offices } from "../data/content";

export default function Contact() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mota-cream pt-[var(--header-height)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,109,190,0.1),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,58,95,0.04),transparent_45%)]" />

        <div className="container-mota relative grid items-center gap-10 px-5 py-14 sm:gap-12 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mota-eyebrow-pill">Contact Us</span>
            <h1 className="mt-5 font-sans text-[clamp(2.25rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-mota-ink">
              Send Us Your Query{" "}
              <span className="text-[#086dbe]">Anytime</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-mota-mist sm:mt-6 sm:text-base">
              Reach our Pune office or Baramati manufacturing plant, we&apos;re here to
              help with design, sampling and bulk delivery.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3">
              <CtaButton href="tel:+919028552855" variant="accent">
                Call Us
              </CtaButton>
              <CtaButton to="/uniforms" variant="outline">
                View Uniforms
              </CtaButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[1.75rem] shadow-[0_24px_56px_rgba(30,58,95,0.16)] sm:rounded-[2rem]">
              <div className="aspect-[5/4] sm:aspect-[4/3]">
                <img
                  src="/corporate_uniforms.png"
                  alt="Contact Mota Group"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 hidden rounded-2xl border border-white/50 bg-white px-5 py-4 shadow-float sm:block sm:-bottom-5 sm:-left-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#086dbe]">
                Quick reach
              </p>
              <a
                href="tel:+919028552855"
                className="mt-1 block text-sm font-semibold text-mota-ink transition-colors hover:text-[#086dbe]"
              >
                +91 90285 52855
              </a>
              <a
                href="mailto:contact@primoglobal.in"
                className="mt-0.5 block text-sm text-mota-mist transition-colors hover:text-[#086dbe]"
              >
                contact@primoglobal.in
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offices + Form */}
      <section className="section-pad relative overflow-hidden bg-mota-cream !pt-8 sm:!pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(8,109,190,0.08),transparent_50%)]" />

        <div className="container-mota relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <span className="mota-eyebrow-pill">Our Offices</span>
                <h2 className="mota-title-section mt-4">
                  Get in{" "}
                  <span className="text-[#086dbe]">Touch</span>
                </h2>
                <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-mota-mist">
                  Pune headquarters and Baramati manufacturing plant, both ready to assist
                  you.
                </p>
              </motion.div>

              <div className="mt-8 space-y-4 sm:mt-10">
                {[offices.pune, offices.plant].map((office, i) => (
                  <motion.div
                    key={office.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.55 }}
                    className="relative overflow-hidden rounded-[1.75rem] border border-mota-line bg-white/90 p-6 shadow-soft sm:p-7"
                    data-reveal
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#086dbe]/10" />
                    <div className="relative">
                      <h3 className="mota-title-card text-xl">{office.title}</h3>
                      <p className="mt-1 text-sm font-medium text-[#086dbe]">
                        {office.company}
                      </p>
                      <div className="mt-3 h-0.5 w-10 rounded-full bg-[#086dbe]" />

                      <div className="mt-5 space-y-3">
                        {office.address.map((line) => (
                          <p
                            key={line}
                            className="flex items-start gap-3 text-sm text-mota-mist"
                          >
                            <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-[#086dbe]" />
                            {line}
                          </p>
                        ))}
                        <a
                          href={`tel:${office.tel.replace(/\s/g, "").split("/")[0]}`}
                          className="flex items-center gap-3 text-sm text-mota-mist transition-colors hover:text-[#086dbe]"
                        >
                          <HiOutlinePhone className="text-[#086dbe]" />
                          {office.tel}
                        </a>
                        <a
                          href={`mailto:${office.email}`}
                          className="flex items-center gap-3 text-sm text-mota-mist transition-colors hover:text-[#086dbe]"
                        >
                          <HiOutlineMail className="text-[#086dbe]" />
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <span className="mota-eyebrow-pill">Enquiry</span>
              <h2 className="mota-title-section mt-4">
                Feedback /{" "}
                <span className="text-[#086dbe]">Enquiry Form</span>
              </h2>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-mota-mist">
                Share your requirements and our team will get back to you promptly.
              </p>
              <div className="mt-6">
                <EnquiryForm
                  source="contact"
                  showMessage
                  className="!rounded-[1.75rem] shadow-float sm:!rounded-[2rem]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Prefer a call?"
        title={
          <>
            Let&apos;s talk about your{" "}
            <span className="text-[#086dbe]">uniform program</span>
          </>
        }
        description="Our team in Pune and Baramati is ready to help with design, sampling, and bulk delivery."
        primaryLabel="Call Us"
        primaryTo="tel:+919028552855"
        secondaryLabel="View Uniforms"
        secondaryTo="/uniforms"
      />
    </>
  );
}
