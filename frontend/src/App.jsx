import Heading from "./Heading";
import Expertise from "./Expertise";
import PastProjects from "./PastProjects";

const App = () => {
  return (
    <div className="bg-[#E5D5B4]">
      <Heading />
      <Expertise />
      <PastProjects />

      <footer className="bg-[#353C40] text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex gap-4">
              {/* <Button
                variant="ghost"
                className="text-[#DBA14A] hover:text-[#EFC991] hover:bg-[#346078]"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                className="text-[#DBA14A] hover:text-[#EFC991] hover:bg-[#346078]"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                className="text-[#DBA14A] hover:text-[#EFC991] hover:bg-[#346078]"
              >
                <Mail className="h-5 w-5" />
              </Button> */}
            </div>
            <p className="text-[#EFC991]">
              © 2024 Quillzyy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
