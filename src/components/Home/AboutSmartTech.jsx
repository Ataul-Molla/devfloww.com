import image1 from "../../assets/Asset 2.png";
import image2 from "../../assets/Asset 3.png";
import image3 from "../../assets/Asset 4.png";
import image4 from "../../assets/Asset 5.png";
import image5 from "../../assets/Asset 6.png";
import image6 from "../../assets/Asset 8.png";
import image7 from "../../assets/Asset 9.png";
import bg_repeater from "../../assets/bg_repeater.png";

function AboutSmartTech() {
  const stats = [
    {
      icon: image1,
      value: "5+ Years of",
      label: "Experience",
    },
    {
      icon: image2,
      value: "35+ Successful",
      label: "Projects",
    },
    {
      icon: image3,
      value: "100% Job",
      label: "Satisfaction Guarantee",
    },
    {
      icon: image4,
      value: "50+ Happy",
      label: "Clients",
    },
    {
      icon: image5,
      value: "15+ Active",
      label: "Team Members",
    },
    {
      icon: image6,
      value: "Uniquely Creative",
      label: "Solutions",
    },
    {
      icon: image7,
      value: "Superfast",
      label: "Delivery",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative h-auto overflow-hidden">
      <div className="absolute top-0 left-0 z-[-1] w-full h-full">
        <img
          src={bg_repeater}
          alt="background repeater"
          className="block w-full h-full transform-[scale(1.5)] rotate-[5deg]"
        />
      </div>
      <div className="container mx-auto bg-transparent">
        <div className="text-left">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[55px] font-medium mb-6 leading-tight">
            <span className="text-gray-900">Smart </span>
            <span className="text-blue-600 font-bold">Tech</span>
            <span className="text-gray-900">. Sharp </span>
            <span className="text-blue-600 font-bold">Minds</span>
            <span className="text-gray-900">. Scalable </span>
            <span className="text-blue-600 font-bold">Results</span>
          </h1>

          {/* Description */}
          <div className="max-w-3xl mb-12">
            <p className="text-lg leading-relaxed">
              <strong className="font-semibold">devfloww Solutions</strong> is
              your technology partner in building next-gen digital platforms —
              from custom software and AI systems to full-fledged mobile and web
              applications. We focus on building purposeful, performance-driven
              solutions that make a real difference.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center space-x-4"
              >
                <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-1 mt-2 md:mt-0">
                  <div className="text-gray-900 font-medium text-[20px] leading-tight text-center md:text-start">
                    {stat.value} <br className="hidden md:block" /> {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-black text-white px-8 py-3 font-medium text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSmartTech;
