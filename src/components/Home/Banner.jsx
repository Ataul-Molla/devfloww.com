import image from "../../assets/bg_image.png";

const Banner = ({
  heading,
  paragraph,
  headingClass,
  paragraphClass,
  buttonText,
}) => {
  return (
    <>
      <div>
        <section id="banner">
          <div className="h-auto md:min-h-[90vh] relative flex justify-center items-center">
            <div className="w-full h-[100%] absolute left-0 top-0 z-[-1]">
              <img
                src={image}
                alt="background image banner"
                className="block w-full h-full object-cover"
              />
            </div>
            <div className="container py-20 md:py-26 relative z-10">
              <div
                className={`font-semibold text-4xl text-white leading-normal px-5 md:px-0 ${headingClass}`}
              >
                {heading ? (
                  heading
                ) : (
                  <>
                    Let’s bring your ideas to life{" "}
                    <br className="hidden md:block" /> with{" "}
                    <span className="text-blue-800 font-bold">Devfloww</span>
                  </>
                )}
              </div>
              <div
                className={`text-[22px] mt-10 max-w-5xl text-white px-5 md:px-0 ${paragraphClass}`}
              >
                {paragraph ? (
                  paragraph
                ) : (
                  <>
                    At devfloww, we turn your ideas into high-performing digital
                    experiences. <br className="hidden lg:block" /> With modern
                    tech, clean code, and creative minds, we build scalable
                    solutions <br className="hidden lg:block" /> that inspire,
                    engage, and grow your vision into reality.{" "}
                    <br className="hidden lg:block" /> Let’s code the future —
                    together.
                  </>
                )}
              </div>
              <div className="mt-6 px-5 md:px-0">
                <button className="relative cursor-pointer px-8 py-2 text-[18px] font-semibold text-white  transition-all duration-300 transform bg-cyan-600">
                  {buttonText ? buttonText : "Get Started"}
                  {/* <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div> */}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
