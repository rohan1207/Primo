import { useScrollReveal } from "../hooks/useAnimations";
import NewHero from "../components/home/NewHero";
import DomainSplit from "../components/home/DomainSplit";
import HomeAbout from "../components/home/HomeAbout";
import Strengths from "../components/home/Strengths";
import TrustedPartnerships from "../components/home/TrustedPartnerships";
import ProductsPreview from "../components/home/ProductsPreview";
import GridMotionSection from "../components/home/GridMotionSection";
import EnquirySection from "../components/home/EnquirySection";
import CTABanner from "../components/ui/CTABanner";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <NewHero />
      <DomainSplit />
      <HomeAbout />
      <Strengths />
      <TrustedPartnerships />
      <GridMotionSection />
      <ProductsPreview />
      <EnquirySection />
      <CTABanner
        eyebrow="Start your order"
        title={
          <>
            Premium uniforms,{" "}
            <span className="text-[#086dbe]">delivered on time</span>
          </>
        }
        description="25+ years of trusted manufacturing. School, corporate, hospital & industrial, all under one roof."
        primaryLabel="Get a Quote"
        primaryTo="/contact"
        secondaryLabel="View Uniforms"
        secondaryTo="/uniforms"
      />
    </>
  );
}
