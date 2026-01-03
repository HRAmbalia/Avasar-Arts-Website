import { Play } from "lucide-react";

const videos = [
  {
    id: "KjdSxit1rPM", // Replace with actual YouTube video IDs
    title: "Wedding Highlight",
    description: "Capturing the magic of love stories",
  },
  {
    id: "bHFX4WDFhcE", // Replace with actual YouTube video IDs
    title: "Jal Vidhi Reel",
    description: "A glimpse into our creative process",
  },
  {
    id: "Au4cHP7B5ic", // Replace with actual YouTube video IDs
    title: "Bridal dance by Anjli",
    description: "Capturing beautiful moments of celebration",
  },
];

const VideoSection = () => {
  return (
    <section id="videos" className="section-padding bg-card">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Watch Our Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Video <span className="text-primary italic">Gallery</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Experience the emotion and artistry of our work through our video 
            content. Subscribe to our YouTube channel for more behind-the-scenes 
            and highlight reels.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <article key={index} className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-card bg-secondary">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@avasararts5779"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body text-sm uppercase tracking-wider text-primary hover:text-gold-light transition-colors"
          >
            <Play size={20} />
            <span>Visit Our YouTube Channel</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
