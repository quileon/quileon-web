import React from "react";

const Skills = ({ title, skills }) => {
  return (
    <div className="flex flex-col gap-2 bg-[#EFC991] p-6 rounded-lg shadow-lg">
      <h3 className="font-semibold text-[#353C40] text-xl">{title}</h3>
      <div className="flex flex-row gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-[#DBA14A] text-white hover:bg-white hover:text-[#DBA14A] p-2 rounded cursor-pointer shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
