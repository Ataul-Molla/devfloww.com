import MotiveOfOrganization from "../../components/About/MotiveOfOrganization";
import image from "../../assets/bg_image.png";

function about() {
  return (
    <div>
      <section id="banner">
        <div className="h-auto min-h-[90vh] relative flex justify-center items-center">
          <div className="w-full h-[100%] absolute left-0 top-0 z-[-1]">
            <img
              src={image}
              alt="background image banner"
              className="block w-full h-full"
            />
          </div>
          <div className="container py-26 relative z-10">
            <div
              className={`font-semibold text-5xl text-white leading-normal`}
            >
              About Us
            </div>
            <div className={`text-[22px] mt-10 max-w-5xl text-white `}>
              At devfloww Solutions, we empower businesses through cutting-edge
              technology
              <br className="hidden lg:block" />
              and forward-thinking strategies. From custom software development
              to robust cloud solutions,
              <br className="hidden lg:block" />
              we deliver innovative digital experiences built for precision,
              scalability, and reliability.
            </div>
            <div className="mt-6">
              <button className="relative cursor-pointer px-8 py-2 text-[18px] font-semibold text-white  transition-all duration-300 transform bg-cyan-600">
                Learn More
                {/* <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div> */}
              </button>
            </div>
          </div>
        </div>
      </section>
      <MotiveOfOrganization />
      <div>
        <section id="about-cta-banner">
          <div className="h-auto relative mt-10">
            <div className="w-full h-[100%] absolute left-0 top-0 z-[-1]">
              <img
                src={image}
                alt="background image banner"
                className="block w-full h-full"
              />
            </div>
            <div className="container py-20 relative z-10">
              <div className="font-semibold text-5xl text-white leading-tight">
                Let’s <br />
                <span className="">Connect</span>
              </div>
              <div className="text-[22px] mt-10 max-w-5xl text-white">
                We’d love to hear from you! Reach out to us today to learn more{" "}
                <br className="lg:block" />
                about our services, discuss your project, or simply get to know
                <br className="lg:block" />
                us better. Let’s build something amazing together.
              </div>
              <div className="mt-6">
                <button className="relative px-8 py-2 text-[18px] font-semibold  transition-all duration-300 transform bg-white text-black cursor-pointer">
                  Connect Now
                  {/* <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div> */}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default about;
