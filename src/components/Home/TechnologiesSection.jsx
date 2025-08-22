import image from "../../assets/bg_image.png";
import image1 from "../../assets/technology/Asset 17.png";
import image2 from "../../assets/technology/Asset 18.png";
import image3 from "../../assets/technology/Asset 19.png";
import image4 from "../../assets/technology/Asset 20.png";
import image5 from "../../assets/technology/Asset 21.png";
import image6 from "../../assets/technology/Asset 22.png";
import image7 from "../../assets/technology/Asset 23.png";
import image8 from "../../assets/technology/Asset 24.png";
import image9 from "../../assets/technology/Asset 25.png";
import image10 from "../../assets/technology/Asset 26.png";
import image11 from "../../assets/technology/Asset 27.png";
import image12 from "../../assets/technology/Asset 28.png";
import image13 from "../../assets/technology/Asset 34.png";
import image14 from "../../assets/technology/Asset 33.png";
import image15 from "../../assets/technology/Asset 32.png";
import image16 from "../../assets/technology/Asset 31.png";
import image17 from "../../assets/technology/Asset 30.png";
import image18 from "../../assets/technology/Asset 29.png";

const TechnologiesSection = () => {
  const technologies = [
    { name: "Full Stack", icon: image1 },
    { name: "Flutter", icon: image2 },
    { name: "React", icon: image3 },
    { name: "Web", icon: image4 },
    { name: "Node.js", icon: image5 },
    { name: "Angular", icon: image6 },
    { name: "Android", icon: image7 },
    { name: "UI/UX", icon: image8 },
    { name: "Backend", icon: image9 },
    { name: "Cloud", icon: image10 },
    { name: "Java", icon: image11 },
    { name: "AWS", icon: image12 },
    { name: "Frontend", icon: image13 },
    { name: "MySQL", icon: image14 },
    { name: "MongoDB", icon: image15 },
    { name: "Mobile", icon: image16 },
    { name: "Next.js", icon: image17 },
    { name: "Adobe Suite", icon: image18 },
  ];

  return (
    <section className="relative py-15">
      {/* Animated background elements */}
      <div className="w-full h-[100%] absolute left-0 top-0 z-[-1]">
        <img
          src={image}
          alt="background image banner"
          className="block w-full h-full"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            Design. Develop. Maintain. Scale.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your All-in-One Partner for Web Development, Design & Digital Growth
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-gray-50/10 rounded-2xl p-6 hover:backdrop-blur-[2px] transition-all duration-[150ms] hover:scale-105 border border-gray-700/50 hover:border-blue-500/50"
            >
              {/* Card content */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="lex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <span className="text-white text-sm font-medium tracking-[1.5px]">
                  {tech.name}
                </span>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="px-8 py-3">
            <span className="text-white font-medium">
              20+ Team of Experts Skilled in
            </span>
          </div>
          <div className="bg-white backdrop-blur-sm px-8 py-3 border border-gray-200">
            <span className="text-gray-900 font-medium">
              40+ Cutting-Edge Technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
