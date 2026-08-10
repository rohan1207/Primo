import OrbitImages from "../OrbitImages/OrbitImages";
import LogoMark from "../svg/LogoMark";
import CtaButton from "../ui/CtaButton";

const CLIENT_LOGOS = [
  "/clients/bajaj.png",
  "/clients/bilt.png",
  "/clients/cipla.png",
  "/clients/honda.png",
  "/clients/kalyani_logo.png",
  "/clients/magarpatta_logo.png",
  "/clients/mahindra.png",
  "/clients/mukand.png",
  "/clients/nanded_logo.png",
  "/clients/orbis_logo.png",
  "/clients/png.png",
  "/clients/ub.png",
  "/clients/uni.png",
  "/tata.png",
];

const INNER_RING = CLIENT_LOGOS.slice(0, 4);
const MIDDLE_RING = CLIENT_LOGOS.slice(4, 8);
const OUTER_RING = CLIENT_LOGOS.slice(8);

function BrandCore() {
  return (
    <div className="relative z-20 flex items-center justify-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-mota-blue p-2 shadow-float sm:h-28 sm:w-28 sm:p-3.5 lg:h-40 lg:w-40 lg:p-5">
        <LogoMark className="h-full w-full max-h-full max-w-full" />
      </div>
    </div>
  );
}

export default function TrustedPartnerships() {
  return (
    <section className="section-pad relative overflow-hidden bg-mota-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,109,190,0.1),transparent_55%)]" />

      <div className="container-mota relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mota-eyebrow-pill">Trusted Partnerships</span>
          <h2 className="mota-title-section mt-4">
            Brands That{" "}
            <span className="text-[#086dbe]">Trust Mota</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mota-mist sm:text-base">
            From automotive giants to pharma leaders and institutions, our clients orbit
            around quality, consistency, and on-time delivery.
          </p>
        </div>

        <div className="relative mx-auto mt-10 aspect-square w-full max-w-[42rem] sm:mt-14 lg:max-w-[48rem]">
          <div className="absolute inset-0">
            <OrbitImages
              images={OUTER_RING}
              altPrefix="Client partner"
              shape="circle"
              radius={560}
              duration={50}
              itemSize={148}
              responsive
              baseWidth={1400}
              direction="normal"
              fill
              showPath
              pathColor="rgba(30, 58, 95, 0.12)"
              pathWidth={2}
              rotation={0}
            />
          </div>

          <div className="absolute inset-0">
            <OrbitImages
              images={MIDDLE_RING}
              altPrefix="Client partner"
              shape="circle"
              radius={390}
              duration={38}
              itemSize={148}
              responsive
              baseWidth={1400}
              direction="reverse"
              fill
              showPath
              pathColor="rgba(8, 109, 190, 0.16)"
              pathWidth={2}
              rotation={0}
            />
          </div>

          <div className="absolute inset-0">
            <OrbitImages
              images={INNER_RING}
              altPrefix="Client partner"
              shape="circle"
              radius={255}
              duration={28}
              itemSize={148}
              responsive
              baseWidth={1400}
              direction="normal"
              fill
              showPath
              pathColor="rgba(30, 58, 95, 0.2)"
              pathWidth={2}
              rotation={0}
              centerContent={<BrandCore />}
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <CtaButton to="/clients" variant="accent">
            View All
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
