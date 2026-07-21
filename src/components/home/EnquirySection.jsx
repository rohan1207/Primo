import SectionHeading from "../ui/SectionHeading";
import EnquiryForm from "../ui/EnquiryForm";

export default function EnquirySection() {
  return (
    <section className="section-pad relative overflow-hidden bg-mota-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(8,109,190,0.09),transparent_50%)]" />

      <div className="container-mota relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-mota-line bg-white/85 px-6 py-10 shadow-soft backdrop-blur-sm sm:rounded-[2rem] sm:px-8 sm:py-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#086dbe]/10" />
            <div className="pointer-events-none absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-mota-blue/5" />

            <div className="relative">
              <SectionHeading
                eyebrow="Enquiry Form"
                title={
                  <>
                    Let&apos;s Create Your{" "}
                    <span className="text-[#086dbe]">Uniforms</span>
                  </>
                }
                description="Share your requirements and our team will craft a tailored solution, from design to delivery."
              />
              <div className="mt-8 space-y-4">
                <a
                  href="tel:+919822421212"
                  className="block rounded-2xl border border-mota-line bg-mota-cream/80 px-5 py-4 text-sm text-mota-mist transition-all duration-300 hover:border-[#086dbe]/35 hover:bg-white"
                >
                  Call us at{" "}
                  <span className="font-semibold text-[#086dbe]">+91 98224 21212</span>
                </a>
                <a
                  href="mailto:info@motagroup.in"
                  className="block rounded-2xl border border-mota-line bg-mota-cream/80 px-5 py-4 text-sm text-mota-mist transition-all duration-300 hover:border-[#086dbe]/35 hover:bg-white"
                >
                  Email{" "}
                  <span className="font-semibold text-[#086dbe]">info@motagroup.in</span>
                </a>
              </div>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
