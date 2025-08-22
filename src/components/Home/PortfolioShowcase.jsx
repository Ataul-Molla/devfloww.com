import { ExternalLink } from "lucide-react";
import image from "../../assets/Asset 4.png";
import image1 from "../../assets/websites/sound_n_mind.png";
import image2 from "../../assets/websites/annectos.png";
import image3 from "../../assets/websites/umlaut.png";
import image4 from "../../assets/websites/aquadiamond.png";
import image5 from "../../assets/websites/creativeswag.png";
import image6 from "../../assets/websites/bloodlink.png";
import bg_repeater from "../../assets/bg_repeater.png";

const PortfolioShowcase = () => {
  const projects = [
    {
      title: "Wellness & Life Purpose Platform",
      description: "Discover Emotional Wellness and Life Purpose",
      category: "Health & Wellness",
      image: image1,
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Trading Platform",
      description: "We make your trade just after count",
      category: "FinTech",
      image: image2,
      tags: ["Angular", "Python", "PostgreSQL"],
    },
    {
      title: "Fashion E-commerce",
      description: "Unlock Your New Style",
      category: "E-commerce",
      image: image3,
      tags: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      title: "Water Management System",
      description: "Pure Elegance, Quality Water",
      category: "Environmental",
      image: image4,
      tags: ["React", "Express", "IoT"],
    },
    {
      title: "Restaurant Management",
      description: "Weekly Special Combo",
      category: "Food & Beverage",
      image: image5,
      tags: ["Flutter", "Firebase", "Stripe"],
    },
    {
      title: "Blood Donation Campaign",
      description: "Let's Donate Blood Because Your Blood Can Save Many Lives",
      category: "Healthcare",
      image: image6,
      tags: ["React Native", "AWS", "GraphQL"],
    },
  ];

  return (
    <section className="completed-applications">
      <div className="relative border h-auto py-15 overflow-hidden">
        <div className="absolute top-0 left-0 z-[-1] w-full h-full">
          <img
            src={bg_repeater}
            alt="background repeater"
            className="block w-full h-full"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-[55px] font-medium leading-tight">
              Delivering the{" "}
              <span className="text-blue-600 font-medium">Best Service</span>{" "}
              <br className="hidden md:block" />
              <span className="text-blue-600 font-medium">Experience</span>
              <span className="text-gray-900">for our valued customers!</span>
            </h2>

            <div className="max-w-4xl mt-6">
              <p className="text-[20px] leading-">
                At Devfloww, we take pride in delivering exceptional results for
                our clients across various industries. Our commitment to
                excellence and innovation is evident in every project we
                undertake. Explore our latest achievements and see how our
                solutions have transformed businesses.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white overflow-hidden relative"
              >
                {/* Project Image */}
                <div className="relative h-75 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="bg-black/50 absolute bottom-0 flex items-center space-x-2 p-3">
                  <div className="rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={image}
                      alt="Award"
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[16px] text-white leading-tight">
                      At Devfloww, we take pride in delivering exceptional
                      results for our clients across various industries. Our
                      commitment to excellence and innovation is evident in
                      every project we undertake.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
