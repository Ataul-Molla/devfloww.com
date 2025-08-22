import {
  Users,
  Mountain,
  Eye,
  Laptop,
  Smartphone,
  Target,
  Palette,
  Globe,
  Settings,
  Lightbulb,
  Shield,
  Heart,
  TrendingUp,
  Rocket,
  BarChart3,
} from "lucide-react";
import image from "../../assets/bg_image.png";
import { FaUsers } from "react-icons/fa6";
import { PiHandshakeLight } from "react-icons/pi";
import image5 from "../../assets/Asset 6.png";
import image2 from "../../assets/Asset 3.png";

function MotiveOfOrganization() {
  return (
    <div className="relative overflow-hidden mt-10">
      <div className="relative z-10 space-y-10">
        {/* Three Cards Section */}
        <div className="grid md:grid-cols-3 items-center justify-between gap-8 mb-16 container mx-auto">
          {/* Who we are */}
          <div
            className="relative text-center bg-white shadow-lg border-2 border-black flex flex-col h-full overflow-hidden"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Removed white overlay for background image */}
            <div className="mb-6 flex justify-center relative z-10">
              <div className="bg-black/10 p-4 rounded-full">
                <img
                  src={image5}
                  alt="card image 1"
                  className="w-24 h-20 border"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-white relative z-10">
              Who we are
            </h2>
            <p className="text-white leading-relaxed relative z-10 bg-red-500/50">
              At devfloww Solutions, we are a team of passionate developers,
              creative designers, strategic thinkers, and forward-thinking
              consultants. United by innovation and driven by results, we build
              next-generation digital solutions that solve real-world business
              challenges.
            </p>
          </div>

          {/* Our Mission */}
          <div
            className="relative text-center bg-white shadow-lg border-2 border-black flex flex-col h-full overflow-hidden"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Removed white overlay for background image */}
            <div className="mb-6 flex justify-center relative z-10">
              <div className="bg-black/10 p-4 rounded-full">
                <img src={image2} className="w-24 h-20 border" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-white relative z-10">
              Our Mission
            </h2>
            <p className="text-white leading-relaxed relative z-10">
              At devfloww Solutions, our mission is to simplify technology for
              businesses and focus on what they do best. We strive to be a
              trusted partner in innovation and growth—delivering cutting-edge
              digital solutions tailored to each client's unique needs and
              goals.
            </p>
          </div>

          {/* Our Vision */}
          <div
            className="relative text-center bg-white shadow-lg border-2 border-black flex flex-col h-full overflow-hidden"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Removed white overlay for background image */}
            <div className="mb-6 flex justify-center relative z-10">
              <div className="bg-black/10 p-4 rounded-full">
                <Eye className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-white relative z-10">
              Our Vision
            </h2>
            <p className="text-white leading-relaxed relative z-10">
              To be a leader in digital transformation—driving innovation,
              inspiring progress, and enabling every business to harness the
              full power of technology. We envision a future where organizations
              of all sizes can thrive and compete with confidence in a
              connected, global world.
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mt-10">
          <div
            className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/10 container mx-auto"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <h2 className="text-4xl font-bold text-white mb-2">What</h2>
                <h2 className="text-4xl font-bold text-white">We Do</h2>
              </div>
              <div className="lg:w-2/3">
                <p className="text-white text-lg leading-relaxed">
                  At devfloww Solutions, we offer a diverse range of technology
                  services designed to meet the evolving needs of modern
                  businesses. Our solutions are crafted to drive efficiency,
                  innovation, and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Services Section */}

        <div className="pt-10 container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* Service 1 */}
            <div className="bg-gray-200 rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="relative w-full flex flex-col items-center pt-12">
                <div className="absolute left-1/2 -top-16 transform -translate-x-1/2 z-10">
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <Laptop className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2">
                  Custom Software Development
                </h3>
                <p className="text-gray-700 text-sm">
                  Tailored solutions for your unique goals
                  <br />
                  Scalable, secure, and efficient
                  <br />
                  From concept to clean code
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-200 rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="relative w-full flex flex-col items-center pt-12">
                <div className="absolute left-1/2 -top-16 transform -translate-x-1/2 z-10">
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2">
                  Application Development
                </h3>
                <p className="text-gray-700 text-sm">
                  Android & iOS mobile apps
                  <br />
                  Cross-platform solutions
                  <br />
                  Secure and user-friendly interface
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-200 rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="relative w-full flex flex-col items-center pt-12">
                <div className="absolute left-1/2 -top-16 transform -translate-x-1/2 z-10">
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2">AI & ML Development</h3>
                <p className="text-gray-700 text-sm">
                  Predictive analytics and automation
                  <br />
                  Custom ML model training
                  <br />
                  Smart data-driven solutions
                </p>
              </div>
            </div>
            {/* Service 4 */}
            <div className="bg-gray-200 rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="relative w-full flex flex-col items-center pt-12">
                <div className="absolute left-1/2 -top-16 transform -translate-x-1/2 z-10">
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2">UI & UX Design</h3>
                <p className="text-gray-700 text-sm">
                  Intuitive and user-centric designs
                  <br />
                  Wireframes, mockups & prototypes
                  <br />
                  Enhanced user engagement and retention
                </p>
              </div>
            </div>
            {/* Service 5 */}
            <div className="bg-gray-200 rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="relative w-full flex flex-col items-center pt-12">
                <div className="absolute left-1/2 -top-16 transform -translate-x-1/2 z-10">
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2">
                  IT Consultation Service
                </h3>
                <p className="text-gray-700 text-sm">
                  Strategy & digital transformation
                  <br />
                  System architecture & tech guidance
                  <br />
                  Streamlining business operations
                </p>
              </div>
            </div>
            {/* Service 6 */}
            <div className="bg-gray-200 rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="relative w-full flex flex-col items-center pt-12">
                <div className="absolute left-1/2 -top-16 transform -translate-x-1/2 z-10">
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2">Website Design</h3>
                <p className="text-gray-700 text-sm">
                  Aesthetic and modern layouts
                  <br />
                  Tailored to your brand identity
                  <br />
                  Optimized for all devices
                </p>
              </div>
            </div>
            {/* Service 7 */}
            <div className="bg-gray-200 rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="relative w-full flex flex-col items-center pt-12">
                <div className="absolute left-1/2 -top-16 transform -translate-x-1/2 z-10">
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2">
                  Design & Creative Solutions
                </h3>
                <p className="text-gray-700 text-sm">
                  Branding, logo & visual assets
                  <br />
                  Graphic design for digital & print
                  <br />
                  Creative storytelling through visuals
                </p>
              </div>
            </div>
            {/* Service 8 */}
            <div className="bg-gray-200 rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="relative w-full flex flex-col items-center pt-12">
                <div className="absolute left-1/2 -top-16 transform -translate-x-1/2 z-10">
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2">
                  Digital Marketing & SEO
                </h3>
                <p className="text-gray-700 text-sm">
                  Social media campaigns
                  <br />
                  Search engine optimization (SEO)
                  <br />
                  Lead generation & performance tracking
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Our Values Section */}
        <div className="mt-14 relative overflow-hidden">
          <div className="w-full h-[100%] absolute left-0 top-0 z-[-1]">
            <img
              src={image}
              alt="background image banner"
              className="block w-full h-full"
            />
          </div>

          <div className="relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-0 items-stretch justify-between">
              {/* Left Side - Our Values Text */}
              <div className="lg:w-1/4 w-full bg-black p-18 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Values
                </h2>
                <p className="text-white/80 leading-relaxed">
                  At devfloww Solutions, our core values shape every aspect of
                  our digital journey—from product innovation to client
                  engagement. These principles are the foundation of our mission
                  to deliver high-quality, future-ready digital solutions across
                  industries.
                </p>
                <p className="text-white/80 leading-relaxed mt-4">
                  Let's build something exceptional—together.
                </p>
              </div>

              {/* Right Side - Values Grid */}
              <div className="lg:w-3/4 w-full p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Customer-Centricity */}
                  <div className="bg-white/20 p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Customer-Centricity
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Our customers are at the heart of everything we do. We
                          listen attentively, understand deeply, and deliver
                          customized digital solutions that not only meet but
                          exceed business goals. Your success drives our
                          innovation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Innovation */}
                  <div className="bg-white/20 p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Innovation
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          We thrive on forward-thinking. By continually
                          exploring emerging technologies, we deliver
                          cutting-edge software solutions that keep our clients
                          ahead in a competitive digital world.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Integrity */}
                  <div className="bg-white/20 p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Integrity
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Trust is our currency. We maintain full transparency
                          in all client interactions and transactions. Our
                          commitment to honesty builds long-term partnerships in
                          the tech ecosystem.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Collaboration */}
                  <div className="bg-white/20 p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Collaboration
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          We believe in co-creation. By fostering collaboration
                          across our teams, clients, and stakeholders, we blend
                          ideas and technical expertise to create impactful,
                          scalable digital products.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Excellence */}
                  <div className="bg-white/20 p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Excellence
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Excellence is our standard. Whether it's a web app,
                          mobile platform, or enterprise system, we bring
                          precision, passion, and high-quality execution to
                          every digital project.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Job Satisfaction */}
                  <div className="bg-white/20 p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Job Satisfaction
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          At Devfloww, client satisfaction is at the heart of
                          what we do. We take time to understand your goals and
                          deliver digital solutions that make a difference. Your
                          success inspires us to innovate and exceed
                          expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose Us Section */}
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="w-full h-[100%] absolute left-0 top-0 z-[-1]">
              <img
                src={image}
                alt="background image banner"
                className="block w-full h-full"
              />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="bg-black p-10">
                  <h2 className="text-4xl font-bold text-white mb-2">Why</h2>
                  <h2 className="text-4xl font-bold text-white">Choose Us</h2>
                </div>
                <div className="flex-1 p-10">
                  <p className="text-white/90 text-lg leading-relaxed">
                    At devfloww Solutions, we're not just about ticking
                    boxes—we're here to help your business grow with smart,
                    reliable digital solutions. Our team brings together tech
                    expertise, creativity, and a solid understanding of what
                    makes your business unique.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Cards Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Our Team Card */}
            <div className="relative overflow-hidden rounded-lg h-auto">
              <div className="w-full h-[100%] absolute left-0 top-0 z-[-1]">
                <img
                  src={image}
                  alt="background image banner"
                  className="block w-full h-full"
                />
              </div>

              <div className="relative z-10 text-center ">
                <div className="mb-4 flex justify-center pt-8">
                  <div className="rounded-full">
                    <FaUsers className="text-[120px] text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Our Team
                </h3>
                <p className="text-white/80 leading-relaxed bg-black/70 px-8 py-2">
                  Our talented team is the backbone of our success. We are a
                  diverse group of professionals who bring together a wealth of
                  experience in development, design, project management, and
                  digital strategy. We are passionate about what we do and
                  dedicated to helping our clients succeed.
                </p>
              </div>
            </div>

            {/* Join Us Card */}
            <div className="relative overflow-hidden rounded-lg">
              <div className="w-full h-[100%] absolute left-0 top-0 z-[-1]">
                <img
                  src={image}
                  alt="background image banner"
                  className="block w-full h-full"
                />
              </div>

              <div className="relative z-10 text-center">
                <div className="mb-4 flex justify-center pt-8">
                  <div className="rounded-full">
                    <PiHandshakeLight className="text-[120px] text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Join Us on this Journey
                </h3>
                <p className="text-white/80 leading-relaxed bg-black/70 px-8 py-2">
                  We invite you to partner with us and experience the difference
                  that a committed, innovative, and customer-focused team can
                  make. Whether you're looking to build a new digital solution,
                  enhance an existing one, or navigate your digital
                  transformation journey, we are here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotiveOfOrganization;
