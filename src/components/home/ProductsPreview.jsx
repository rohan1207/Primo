import { motion } from "framer-motion";
import { products } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import { ProductCard } from "../ui/PageHero";
import CtaButton from "../ui/CtaButton";

export default function ProductsPreview() {
  return (
    <section className="section-pad relative overflow-hidden bg-mota-cream !pt-8 sm:!pt-10 lg:!pt-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(8,109,190,0.08),transparent_55%)]" />

      <div className="container-mota relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Products"
            title={
              <>
                Uniforms for{" "}
                <span className="text-[#086dbe]">Every Industry</span>
              </>
            }
            description="From classrooms to boardrooms, hospitals to factory floors, precision-tailored for every sector."
          />
          <CtaButton to="/uniforms" variant="outline" className="hidden sm:inline-flex">
            View All
          </CtaButton>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.title} {...product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center sm:hidden"
        >
          <CtaButton to="/uniforms" variant="accent">
            View All Products
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
