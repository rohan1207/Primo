import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { topProducts, quickLinks, offices } from "../../data/content";
import LogoMark from "../svg/LogoMark";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-mota-blue">
      <div className="mota-dark-blob absolute -right-32 top-0 h-96 w-96 opacity-30" />
      <div className="mota-dark-blob absolute -bottom-24 -left-24 h-72 w-72 opacity-20" />
      <div className="mota-grain opacity-[0.04]" />

      <div className="section-pad relative !pb-10">
        <div className="container-mota">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-8">
            <div className="col-span-2 lg:col-span-4">
              <Link to="/" className="mb-5 inline-flex items-center sm:mb-6">
                <LogoMark className="h-12 w-auto sm:h-14" />
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-white/70">
                Unique and individualized uniform solutions, school, corporate, hospital,
                industrial & specialty workwear for 25+ years.
              </p>
              <p className="mt-3 text-xs text-white/50">A brand of Mota Garments</p>
            </div>

            <div className="lg:col-span-2">
              <h4 className="mota-eyebrow-light mb-4 lg:mb-5">Top Products</h4>
              <ul className="space-y-3">
                {topProducts.map((item) => (
                  <li key={item}>
                    <Link
                      to="/uniforms"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="mota-eyebrow-light mb-4 lg:mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-4">
              <h4 className="mota-eyebrow-light mb-4 lg:mb-5">Get In Touch</h4>
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
                {[offices.pune, offices.plant].map((office) => (
                  <div
                    key={office.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-5"
                  >
                    <p className="mb-1 text-sm font-semibold text-white">{office.title}</p>
                    <p className="text-xs font-medium text-white/50">{office.company}</p>
                    <div className="mt-3 space-y-2">
                      {office.address.map((line) => (
                        <p key={line} className="flex items-start gap-2 text-xs text-white/60">
                          <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-white/40" />
                          {line}
                        </p>
                      ))}
                      <a
                        href={`tel:${office.tel.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-white"
                      >
                        <HiOutlinePhone className="shrink-0 text-white/40" />
                        {office.tel}
                      </a>
                      <a
                        href={`mailto:${office.email}`}
                        className="flex items-start gap-2 break-all text-xs text-white/60 transition-colors hover:text-white"
                      >
                        <HiOutlineMail className="mt-0.5 shrink-0 text-white/40" />
                        {office.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="my-10 h-px origin-left bg-gradient-to-r from-white/30 via-white/10 to-transparent"
          />

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/50">
              Copyright © 2026 Mota Uniforms | All rights reserved
            </p>
            <p className="text-xs text-white/50">
              Designed & Developed by{" "}
              <span className="font-semibold text-white">TheSocialKollab</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
