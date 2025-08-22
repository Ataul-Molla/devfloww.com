import image from "../../assets/Asset 11.png";
import image1 from "../../assets/Asset 9.png";
import image2 from "../../assets/Asset 10.png";
import image3 from "../../assets/Asset 12.png";
import image4 from "../../assets/Asset 16.png";
import image5 from "../../assets/Asset 31.png";
import image6 from "../../assets/Asset 14.png";
import image7 from "../../assets/Asset 13.png";
import bg_repeater from "../../assets/bg_repeater.png";

function AboutSmartTech2() {
  const stats = [
    {
      icon: image1,
      value: "Custom Software",
      label: "Devlopment",
    },
    {
      icon: image2,
      value: "Application",
      label: "Devlopment",
    },
    {
      icon: image,
      value: "AI & ML",
      label: "Devlopment",
    },
    {
      icon: image3,
      value: "UI & UX",
      label: "Design",
    },
    {
      icon: image4,
      value: "IT Consutation",
      label: "Service",
    },
    {
      icon: image5,
      value: "Website",
      label: "Design",
    },
    {
      icon: image6,
      value: "Design &",
      label: "Creative Solutions",
    },
    {
      icon: image7,
      value: "Digital",
      label: "Marketing & SEO",
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
      <div className="container mx-auto">
        <div className="text-left">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[55px] font-medium mb-6 leading-tight">
            Transforming{" "}
            <span className="text-blue-600 font-bold">Visions</span> into{" "}
            <br className="hidden md:block" />
            High-Performance{" "}
            <span className="text-blue-600 font-bold"> Digital Solutions</span>
          </h1>

          {/* Description */}
          <div className="max-w-3xl mb-12">
            <p className="text-lg leading-relaxed">
              Our commitment to innovation ensures that your digital
              infrastructure remains agile, secure, and ahead of the
              curve—empowering you to excel in an evolving technological
              landscape.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center space-x-4">
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

export default AboutSmartTech2;
