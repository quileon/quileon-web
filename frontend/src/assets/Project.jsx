import React from "react";

const Project = ({ project }) => {
  return (
    <a href="">
      <div className="flex flex-col bg-[#346078] rounded-xl object-cover shadow-lg hover:bg-opacity-90">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full rounded-xl"
        />
        <div className="py-4 px-6">
          <h3 className="text-[#EFC991] text-xl font-semibold">
            {project.title}
          </h3>
          <p className="text-white">{project.description}</p>
        </div>
      </div>
    </a>
  );
};

export default Project;
