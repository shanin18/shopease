import React from "react";
import MemberCard from "./MemberCard";

const OurTeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      name: "Emily Johnson",
      role: "Project Manager",
    },
    {
      id: 2,
      image:
        "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
      name: "Michael Smith",
      role: "Lead Developer",
    },
    {
      id: 3,
      image:
        "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
      name: "Sarah Brown",
      role: "UX Designer",
    },
    {
      id: 4,
      image:
        "https://t4.ftcdn.net/jpg/01/95/15/21/360_F_195152118_mJWndEwAgbd9JKUiQ31XazFWCim1yf0b.jpg",
      name: "David Wilson",
      role: "Frontend Developer",
    },
    {
      id: 5,
      image:
        "https://t4.ftcdn.net/jpg/06/49/71/71/360_F_649717160_GtCDrrCATzLhABxMhV8yCGKfxludNvcG.jpg",
      name: "Jessica Martinez",
      role: "Backend Developer",
    },
    {
      id: 6,
      image:
        "https://t4.ftcdn.net/jpg/01/95/15/21/360_F_195152118_mJWndEwAgbd9JKUiQ31XazFWCim1yf0b.jpg",
      name: "James Lee",
      role: "QA Engineer",
    },
    {
      id: 7,
      image:
        "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
      name: "Amanda Davis",
      role: "Marketing Specialist",
    },
    {
      id: 8,
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      name: "Robert King",
      role: "Product Owner",
    },
  ];

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-14 md:py-16 lg:py-20 mx-auto" bis_skin_checked="1">
        <div
          class="flex flex-col text-center w-full mb-12"
          bis_skin_checked="1"
        >
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" bis_skin_checked="1">
          {teamMembers?.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamMembers;
