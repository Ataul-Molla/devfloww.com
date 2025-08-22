import image from "../../assets/bg_image.png";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import image1 from "../../assets/partner-logos/Nexa White.png";
import image2 from "../../assets/partner-logos/Annectos White.png";
import image3 from "../../assets/partner-logos/Bloodlink White.png";
import image4 from "../../assets/partner-logos/SoundNMind White.png";
import image5 from "../../assets/partner-logos/Rotary White.png";
import image6 from "../../assets/partner-logos/Turbosoft White.png";
import image7 from "../../assets/partner-logos/Aqua White.png";
import image8 from "../../assets/partner-logos/Ecovanta White.png";

const BrandLogo = () => {
  const clients = [
    {
      name: "Nexatech",
      logo: image1,
    },
    {
      name: "annectos",
      logo: image2,
    },
    {
      name: "Blood Links",
      logo: image3,
    },
    {
      name: "Sound-N-Mind",
      logo: image4,
    },
    {
      name: "Rotary",
      logo: image5,
    },
    {
      name: "Turbosoft",
      logo: image6,
    },
    {
      name: "Aqua Diamond",
      logo: image7,
    },
    {
      name: "Ecovanta",
      logo: image8,
    },
  ];

  return (
    <section className="relative py-4 md:py-8 overflow-hidden">
      <div className="w-full h-[100%] absolute left-0 top-0 z-[-1]">
        <img
          src={image}
          alt="background image banner"
          className="block w-full h-full"
        />
      </div>
      <div className="container mx-auto">
        <div className="hidden xl:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relativetransition-all duration-300 w-full"
            >
              <div className="flex items-center justify-center h-12">
                <img src={client?.logo} alt={`${client.name} logo`} />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden border px-5 md:px-0 xl:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            speed={800}
            effect="ease-in-out"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              280: { slidesPerView: 2 },
              425: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
              1440: { slidesPerView: 7 },
            }}
          >
            {clients?.map((item, ind) => (
              <SwiperSlide key={ind}>
                <div className="group relativetransition-all duration-300 w-full">
                  <div className="flex items-center justify-center h-18">
                    <img
                      src={item?.logo}
                      alt={`${item.name} logo`}
                      className="block w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BrandLogo;
