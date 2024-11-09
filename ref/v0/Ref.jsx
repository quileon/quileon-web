import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#E5D5B4]">
      {/* Hero Section with Offset Grid */}
      <section className="relative h-[80vh] grid grid-cols-2">
        <div className="bg-[#353C40] col-span-2 lg:col-span-1 flex items-center justify-center p-8">
          <div className="max-w-xl">
            <h1 className="text-[#EFC991] text-5xl font-bold mb-4">John Doe</h1>
            <p className="text-[#DBA14A] text-xl mb-6">
              Full Stack Developer & UI Designer
            </p>
            <p className="text-[#E5D5B4] mb-8 leading-relaxed">
              Crafting digital experiences with a perfect blend of functionality
              and aesthetics. Specialized in creating responsive web
              applications with modern technologies.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#346078] hover:bg-[#DBA14A] text-white">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="border-[#DBA14A] text-[#DBA14A] hover:bg-[#DBA14A] hover:text-white"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block bg-[#346078] relative">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Profile"
            width={600}
            height={600}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 object-cover"
          />
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-[#353C40] text-3xl font-bold mb-8">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend", skills: ["React", "Next.js", "TypeScript"] },
              { title: "Backend", skills: ["Node.js", "Python", "PostgreSQL"] },
              { title: "Design", skills: ["Figma", "UI/UX", "Tailwind"] },
              { title: "Tools", skills: ["Git", "Docker", "AWS"] },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-[#346078] font-semibold mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-[#EFC991] text-[#353C40] hover:bg-[#DBA14A]"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-[#353C40] text-3xl font-bold mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "E-commerce Platform",
              "Portfolio Dashboard",
              "Travel Application",
            ].map((project) => (
              <Card
                key={project}
                className="bg-white border-none shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="h-48 bg-[#346078]">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${project}`}
                      alt={project}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#353C40] text-xl font-semibold mb-2">
                      {project}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A sophisticated solution showcasing modern design
                      principles and technical expertise.
                    </p>
                    <Button className="bg-[#DBA14A] hover:bg-[#346078] text-white w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#353C40] text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex gap-4">
              <Button
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
              </Button>
            </div>
            <p className="text-[#EFC991]">
              © 2024 John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
