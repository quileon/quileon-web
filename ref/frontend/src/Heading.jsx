import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Profile from "./assets/Profile";

const Heading = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex flex-row">
      <div className="bg-[#353C40] flex flex-col items-center justify-center p-10 w-full">
        <div className="max-w-xl">
          <h1 className="text-[#EFC991] text-5xl font-bold mb-4">
            Shaquille Arriza Hidayat
          </h1>
          <p className="text-[#DBA14A] text-xl mb-6">
            Bangkit Cloud Computing Cohort
          </p>
          <p className="text-[#E5D5B4] mb-8 leading-relaxed">
            Creating modern web applications with the latest technologies using
            Google Cloud Platform.
          </p>
          <div className="flex space-x-4 items-center">
            <a
              href="mailto:shaquirearija1@gmail.com"
              aria-label="Email"
              target="_blank"
            >
              <div className="bg-[#346078] hover:bg-[#DBA14A] text-white rounded-md px-5 py-2 flex items-center justify-between gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="w-24">Contact Me</p>
              </div>
            </a>
            <a
              href="https://github.com/Quillzyy"
              aria-label="GitHub"
              target="_blank"
            >
              <div className="bg-white text-[#DBA14A] hover:bg-[#DBA14A] hover:text-white rounded-md px-5 py-2 flex items-center gap-2">
                <FontAwesomeIcon icon={faGithub} />
                <p className="w-24">GitHub</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      {!isSmallScreen && <Profile />}
    </header>
  );
};

export default Heading;
