import React from "react";
import Skills from "./assets/Skills";

const Expertise = () => {
  return (
    <section className="mx-auto p-10">
      <h2 className="text-[#353C40] text-3xl font-bold mb-8">Expertise</h2>
      <div className="flex flex-col gap-8">
        {[
          {
            title: "Fullstack",
            skills: ["Node.js", "React.js", "MongoDB", "MySQL"],
          },
          { title: "Cloud", skills: ["AWS", "Google Cloud", "Azure"] },
          { title: "Tools", skills: ["Linux", "Cisco", "Git"] },
        ].map((items) => (
          <Skills key={items.title} title={items.title} skills={items.skills} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
