import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { topProducts, quickLinks, offices } from "../../data/content";
import LogoMark from "../svg/LogoMark";

const SOCIALS = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
];

const headingClass =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-xs";

const linkClass =
  "inline-flex items-center gap-2 text-[0.95rem] text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-white";

function OfficeCard({ office }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 sm:p-6">
      <p className="text-base font-semibold text-white">{office.title}</p>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
        {office.company}
      </p>

      <div className="mt-4 space-y-2.5">
        <p className="flex items-start gap-2.5 text-sm leading-relaxed text-white/70">
          <HiOutlineLocationMarker className="mt-0.5 h-4 w-4 shrink-0 text-[#5aa6e8]" />
          <span>{office.address.join(" ")}</span>
        </p>
        <a
          href={`tel:${office.tel.replace(/\s/g, "").split("/")[0]}`}
          className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
        >
          <HiOutlinePhone className="h-4 w-4 shrink-0 text-[#5aa6e8]" />
          {office.tel}
        </a>
        <a
          href={`mailto:${office.email}`}
          className="flex items-center gap-2.5 break-all text-sm text-white/70 transition-colors hover:text-white"
        >
          <HiOutlineMail className="h-4 w-4 shrink-0 text-[#5aa6e8]" />
          {office.email}
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-mota-blue">
      <div className="mota-dark-blob absolute -right-32 top-0 h-96 w-96 opacity-30" />
      <div className="mota-dark-blob absolute -bottom-24 -left-24 h-72 w-72 opacity-20" />
      <div className="mota-grain opacity-[0.04]" />

      <div className="container-mota relative px-6 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-12">
        {/* Brand + navigation */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-4">
            <Link to="/" className="inline-flex items-center">
              <LogoMark className="h-14 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
              Unique and individualized uniform solutions for schools, corporates,
              hospitals and industry, manufactured in-house for over 25 years.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#086dbe] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className={headingClass}>Top Products</h4>
            <ul className="mt-5 space-y-3">
              {topProducts.map((item) => (
                <li key={item}>
                  <Link to="/uniforms" className={linkClass}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className={headingClass}>Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h4 className={headingClass}>Reach Us</h4>
            <div className="mt-5 space-y-3">
              <a
                href="tel:+919028552855"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 transition-all duration-300 hover:border-white/25 hover:bg-white/10"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#086dbe] text-white">
                  <HiOutlinePhone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.12em] text-white/45">
                    Call us
                  </span>
                  <span className="block text-[0.95rem] font-semibold text-white">
                    +91 90285 52855
                  </span>
                </span>
              </a>
              <a
                href="mailto:contact@primoglobal.in"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 transition-all duration-300 hover:border-white/25 hover:bg-white/10"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#086dbe] text-white">
                  <HiOutlineMail className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.12em] text-white/45">
                    Email us
                  </span>
                  <span className="block break-all text-[0.95rem] font-semibold text-white">
                    contact@primoglobal.in
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
          <OfficeCard office={offices.pune} />
          <OfficeCard office={offices.plant} />
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="my-7 h-px origin-left bg-gradient-to-r from-white/25 via-white/10 to-transparent sm:my-8"
        />

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-[13px] text-white/55">
            Copyright &copy; 2026 PRIMO CLOTHING COMPANY | All rights reserved
          </p>
          <p className="text-[13px] text-white/55">
            Designed &amp; Developed by{" "}
            <span className="font-semibold text-white">TheSocialKollab</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
