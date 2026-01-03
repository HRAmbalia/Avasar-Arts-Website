import { useState } from "react";
import wedding1 from "@/assets/gallery/wedding-1.jpg";
import family1 from "@/assets/gallery/family-1.jpg";
import landscape1 from "@/assets/gallery/landscape-1.jpg";
import event1 from "@/assets/gallery/event-1.jpg";
import portrait1 from "@/assets/gallery/portrait-1.jpg";
import prewedding1 from "@/assets/gallery/prewedding-1.jpg";

const categories = ["All", "Wedding", "Portrait", "Event", "Landscape"];

const galleryImages = [
  {
    src: wedding1,
    alt: "Beautiful Indian bride in traditional red saree during wedding ceremony",
    category: "Wedding",
    span: "row-span-2",
  },
  {
    src: family1,
    alt: "Professional family portrait photography in studio setting",
    category: "Portrait",
    span: "",
  },
  {
    src: landscape1,
    alt: "Stunning mountain landscape photography at golden hour",
    category: "Landscape",
    span: "row-span-2",
  },
  {
    src: event1,
    alt: "Corporate event photography with speakers on stage",
    category: "Event",
    span: "",
  },
  {
    src: portrait1,
    alt: "Creative fashion portrait with dramatic studio lighting",
    category: "Portrait",
    span: "",
  },
  {
    src: prewedding1,
    alt: "Romantic pre-wedding couple photography at sunset",
    category: "Wedding",
    span: "row-span-2",
  },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Our Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Photography <span className="text-primary italic">Portfolio</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of carefully crafted photographs that 
            capture the beauty, emotion, and essence of life's special moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-body text-sm uppercase tracking-wider px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
          {filteredImages.map((image, index) => (
            <article
              key={index}
              className={`gallery-item group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
                <div>
                  <span className="font-body text-xs uppercase tracking-wider text-primary">
                    {image.category}
                  </span>
                  <p className="font-display text-lg text-foreground mt-1">
                    {image.alt.split(" ").slice(0, 4).join(" ")}...
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
