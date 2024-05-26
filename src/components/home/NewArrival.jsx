import React from "react";
import SectionHeader from "../others/SectionHeader";
import image1 from "../../assets/images/newArrivals/playstation.png";
import image2 from "../../assets/images/newArrivals/woman.png";
import image3 from "../../assets/images/newArrivals/speaker.png";
import image4 from "../../assets/images/newArrivals/perfume.png";

const NewArrival = () => {
  return (
    <section>
      <SectionHeader category="featured" title="New Arrival" />
      <div class="text-gray-600 body-font mt-12">
        <div
          class="flex flex-wrap space-x-10 gap-5 md:gap-10"
          bis_skin_checked="1"
        >
          <div class="flex flex-wrap md:-m-2 -m-1" bis_skin_checked="1">
            <div class="flex flex-wrap w-1/2" bis_skin_checked="1">
              <div
                class="w-full bg-black rounded-md overflow-hidden flex items-end "
                bis_skin_checked="1"
              >
                <img
                  alt="gallery"
                  class="w-full object-cover object-bottom block"
                  src={image1}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2" bis_skin_checked="1">
              <div
                class="md:p-2 p-1 w-full rounded-md over"
                bis_skin_checked="1"
              >
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src={image2}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2" bis_skin_checked="1">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={image3}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2" bis_skin_checked="1">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={image4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
