import React from "react";
import Project from "./assets/Project";

const PastProjects = () => {
  return (
    <section className="mx-auto p-10">
      <h2 className="text-[#353C40] text-3xl font-bold mb-8">
        Featured Projects
      </h2>
      <div className="flex flex-col gap-8">
        {[
          {
            image:
              "https://storage.googleapis.com/dicoding-vm-bucket/project-smartendance.png",
            title: "Smartendance",
            description:
              "Smartendance is a project that I and my team made to help teachers to take attendance easily. This project is made using NodeMCU, RFID, and Flask. The NodeMCU will read the RFID card and send the data to the Flask back-end using MQTT. The teacher then can see the attendance data in the Flask web.",
            link: "https://github.com/wahyukiddies/SmarTendance",
          },
        ].map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PastProjects;
