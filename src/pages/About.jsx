import image from "../assets/images/about/about2.png";
import OurTeamMembers from "../components/about/OurTeamMembers";
import Services from "../components/home/Services";

const About = () => {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto" bis_skin_checked="1">
        <div class="lg:w-4/5 mx-auto flex flex-wrap items-center" bis_skin_checked="1">
          <div
            class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0"
            bis_skin_checked="1"
          >
            <h1 class="text-gray-900 text-3xl lg:text-5xl title-font font-bold mb-8">
              Our Story
            </h1>

            <p class="leading-relaxed mb-4">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p class="leading-relaxed mb-4">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:h-auto h-80 overflow-hidden">
            <img
              alt="ecommerce"
              class="object-cover object-center rounded bg-[#2cb4a8]"
              src={image}
            />
          </div>
        </div>

        <OurTeamMembers />

        <Services />
      </div>
    </section>
  );
};

export default About;
