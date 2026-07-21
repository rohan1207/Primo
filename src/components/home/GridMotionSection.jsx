import GridMotion from "../GridMotion/GridMotion";
import { publicGallery } from "../../data/content";

/** Repeat public gallery images to fill the 28-tile motion grid */
const GRID_IMAGES = Array.from(
  { length: 28 },
  (_, index) => publicGallery[index % publicGallery.length]
);

export default function GridMotionSection({
  gradientColor = "#086dbe",
  items = GRID_IMAGES,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-mota-cream" style={{ height: "100svh" }}>
      <GridMotion gradientColor={gradientColor} items={items} />
    </section>
  );
}
