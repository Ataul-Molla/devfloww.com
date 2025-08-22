import React from "react";
import image from "../../assets/bg_image.png";

export default function CTASection() {
  return (
    <section className="relative text-white py-20 overflow-hidden">
      <div className="w-full h-[100%] absolute left-0 top-0 z-[-1]">
        <img
          src={image}
          alt="background image banner"
          className="block w-full h-full scale-105 rotate-180"
        />
      </div>

      <div className="relative container mx-auto text-left">
        <div className="px-5 md:px-0">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Let's Build Something
            <br />
            <span className="text-white">Great Together</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Tell us about your project—its goals, challenges, and what success
            looks like for you. The more details you provide, the better we can
            tailor our expertise to your needs.
          </p>
          <button className="bg-white text-black px-6 py-2 text-lg font-medium rounded-none">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
