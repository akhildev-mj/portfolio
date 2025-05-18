"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMobile } from "@/hooks/use-mobile";
import {
  ArrowLeft,
  Award,
  Briefcase,
  ChevronRight,
  ExternalLink,
  Github,
  Home,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Particles } from "./components/particles";
import {
  certificationCategories,
  certifications,
} from "./src/data/certifications";
import { projectCategories, projects } from "./src/data/projects";
import type { Certification } from "./src/types/certification";
import type { Project } from "./src/types/project";

export default function Portfolio() {
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>("All");
  const [activeCertFilter, setActiveCertFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<
    Project | Certification | null
  >(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const isMobile = useMobile();

  // Refs for scrollable tabs
  const projectCategoriesRef = useRef<HTMLDivElement>(null);
  const certCategoriesRef = useRef<HTMLDivElement>(null);
  const mainTabsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("home");

  // Filter projects based on category
  const filteredProjects = projects.filter((project) => {
    return (
      activeProjectFilter === "All" || project.category === activeProjectFilter
    );
  });

  // Filter certifications based on category
  const filteredCertifications = certifications.filter((cert) => {
    return activeCertFilter === "All" || cert.category === activeCertFilter;
  });

  // Scroll to active filter in category tabs
  useEffect(() => {
    if (projectCategoriesRef.current) {
      const activeElement = projectCategoriesRef.current.querySelector(
        '[data-state="active"]'
      );
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeProjectFilter]);

  useEffect(() => {
    if (certCategoriesRef.current) {
      const activeElement = certCategoriesRef.current.querySelector(
        '[data-state="active"]'
      );
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeCertFilter]);

  // Handle card click
  const handleCardClick = (item: Project | Certification) => {
    setSelectedItem(item);
    setIsDetailView(true);
  };

  // Back to grid view
  const handleBackClick = () => {
    setIsDetailView(false);
    setSelectedItem(null);
  };

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-950 dark:to-slate-900 p-4 md:p-6 flex items-center justify-center relative">
      <Particles
        className="absolute inset-0"
        quantity={120}
        staticity={40}
        ease={30}
        refresh={false}
      />

      <div className="w-full max-w-[1400px] lg:h-[90vh] md:h-[90vh] flex flex-col lg:flex-row gap-4 md:gap-6 overflow-hidden relative z-10 mobile-stack">
        {/* Left Section */}
        <section className="w-full lg:w-1/4 glass rounded-2xl shadow-lg p-4 md:p-6 overflow-y-auto scrollbar-custom responsive-height mobile-full">
          <div className="flex flex-col items-center text-center mb-6 md:mb-8">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg animate-profile-pulse">
              <Image
                src="/akhildev.webp?height=300&width=300"
                alt="Profile"
                fill
                className="object-cover contrast-[1.15]"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Akhildev MJ
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 font-medium">
              Data Scientist & Full Stack Developer
            </p>

            <div className="flex gap-3 mt-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-purple-100 dark:hover:bg-zinc-800 transition-all duration-300 hover:scale-110 glass"
                onClick={() =>
                  window.open("https://github.com/akhildev-mj", "_blank")
                }
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-purple-100 dark:hover:bg-zinc-800 transition-all duration-300 hover:scale-110 glass"
                onClick={() =>
                  window.open("https://linkedin.com/in/akhildevmj", "_blank")
                }
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-purple-100 dark:hover:bg-zinc-800 transition-all duration-300 hover:scale-110 glass"
                onClick={() =>
                  window.open("mailto:akhildev.adj@gmail.com", "_blank")
                }
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="p-4 glass rounded-xl no-hover-effect">
              <h2 className="text-lg font-semibold mb-2 flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-purple-500" />
                About Me
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Passionate data scientist and full-stack developer with a focus
                on turning data into insights and creating efficient
                applications
              </p>
            </div>

            <div className="p-4 glass rounded-xl no-hover-effect">
              <h2 className="text-lg font-semibold mb-2 flex items-center">
                <Mail className="mr-2 h-5 w-5 text-purple-500" />
                Contact
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                akhildev.adj@gmail.com
                <br />
                +91 9074123050
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 hover:shadow-lg"
              onClick={() =>
                window.open("https://www.credly.com/users/akhildevmj", "_blank")
              }
            >
              View Credly Badges
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>

            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 hover:shadow-lg">
              Download Resume
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Right Section */}
        <section className="w-full lg:w-3/4 glass rounded-2xl shadow-lg p-4 md:p-6 responsive-height mobile-full">
          <div className="relative h-full">
            <Tabs
              defaultValue="home"
              className="w-full h-full"
              value={activeTab}
              onValueChange={handleTabChange}
            >
              <div
                className="overflow-x-auto pb-2 scrollbar-custom"
                ref={mainTabsRef}
              >
                <TabsList className="w-full justify-start bg-zinc-50/30 dark:bg-zinc-800/30 p-1 rounded-lg mb-4 glass">
                  <TabsTrigger
                    value="home"
                    className="data-[state=active]:tab-active transition-all duration-300"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </TabsTrigger>
                  <TabsTrigger
                    value="certifications"
                    className="data-[state=active]:tab-active transition-all duration-300"
                  >
                    <Award className="mr-2 h-4 w-4" />
                    Certifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="projects"
                    className="data-[state=active]:tab-active transition-all duration-300"
                  >
                    <Briefcase className="mr-2 h-4 w-4" />
                    Projects
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Home Tab */}
              {activeTab === "home" && (
                <TabsContent
                  value="home"
                  className="h-[calc(100%-60px)] overflow-hidden"
                >
                  <div className="flex flex-col h-full overflow-y-auto scrollbar-custom">
                    <div className="mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                        Welcome to My Portfolio
                      </h2>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                        I'm a passionate Data Scientist and Full Stack Developer
                        with expertise in building modern applications. Explore
                        my projects and certifications to learn more about my
                        skills and experience.
                      </p>
                    </div>

                    {/* Projects Preview Section */}
                    <div className="section-preview projects mb-8 rounded-xl">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-white">
                          Featured Projects
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20 rounded-full aspect-square p-0 w-10 h-10"
                          onClick={() => setActiveTab("projects")}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-custom">
                        {projects.slice(0, 4).map((project, index) => (
                          <div key={index} className="min-w-[220px]">
                            <Card className="h-full overflow-hidden glass border-0">
                              <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                  src={project.imageUrl || "/placeholder.svg"}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </Card>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certifications Preview Section */}
                    <div className="section-preview certifications rounded-xl">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-white">
                          Recent Certifications
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20 rounded-full aspect-square p-0 w-10 h-10"
                          onClick={() => setActiveTab("certifications")}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-custom">
                        {certifications.slice(0, 4).map((cert, index) => (
                          <div key={index} className="min-w-[220px]">
                            <Card className="h-full overflow-hidden glass border-0">
                              <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                  src={
                                    cert.imageUrl
                                      .replace(".jpeg", "_t.jpeg")
                                      .replace(
                                        "/certifications/",
                                        "/certifications/thumbnails/"
                                      ) || "/placeholder.svg"
                                  }
                                  alt={cert.title}
                                  fill
                                  className="object-cover object-top"
                                />
                              </div>
                            </Card>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              )}

              {/* Projects Tab */}
              {activeTab === "projects" && (
                <TabsContent
                  value="projects"
                  className="h-[calc(100%-60px)] overflow-hidden"
                >
                  {isDetailView && selectedItem ? (
                    <DetailView
                      item={selectedItem}
                      onBack={handleBackClick}
                      type="project"
                    />
                  ) : (
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          My Projects
                        </h2>
                      </div>

                      <div
                        className="overflow-x-auto pb-2 scrollbar-custom"
                        ref={projectCategoriesRef}
                      >
                        <div className="flex gap-2 mb-4 min-w-max">
                          {projectCategories.map((category) => (
                            <Button
                              key={category}
                              variant={
                                activeProjectFilter === category
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() => setActiveProjectFilter(category)}
                              data-state={
                                activeProjectFilter === category
                                  ? "active"
                                  : "inactive"
                              }
                              className={`rounded-full text-xs px-4 py-1 h-8 whitespace-nowrap transition-all duration-300 ${
                                activeProjectFilter === category
                                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                  : "hover:bg-purple-50 dark:hover:bg-zinc-800 glass"
                              }`}
                            >
                              {category}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="overflow-y-auto h-[calc(100%-80px)] pr-2 scrollbar-custom">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {filteredProjects.map((project, index) => (
                            <div
                              key={index}
                              className="cursor-pointer"
                              onClick={() => handleCardClick(project)}
                            >
                              <Card className="overflow-hidden glass border-0">
                                <div className="relative h-48 w-full overflow-hidden">
                                  <Image
                                    src={project.imageUrl || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                  />
                                </div>
                                <CardContent className="p-4">
                                  <h3 className="font-semibold text-lg mb-1 transition-colors">
                                    {project.title}
                                  </h3>
                                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
                                    {project.description}
                                  </p>
                                  <div className="flex flex-wrap gap-1">
                                    {project.technologies.map((tech, i) => (
                                      <Badge
                                        key={i}
                                        variant="outline"
                                        className="bg-purple-50/50 dark:bg-zinc-800/50 text-xs"
                                      >
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>
              )}

              {/* Certifications Tab */}
              {activeTab === "certifications" && (
                <TabsContent
                  value="certifications"
                  className="h-[calc(100%-60px)] overflow-hidden"
                >
                  {isDetailView && selectedItem ? (
                    <DetailView
                      item={selectedItem}
                      onBack={handleBackClick}
                      type="certification"
                    />
                  ) : (
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          My Certifications
                        </h2>
                      </div>

                      <div
                        className="overflow-x-auto pb-2 scrollbar-custom"
                        ref={certCategoriesRef}
                      >
                        <div className="flex gap-2 mb-4 min-w-max">
                          {certificationCategories.map((category) => (
                            <Button
                              key={category}
                              variant={
                                activeCertFilter === category
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() => setActiveCertFilter(category)}
                              data-state={
                                activeCertFilter === category
                                  ? "active"
                                  : "inactive"
                              }
                              className={`rounded-full text-xs px-4 py-1 h-8 whitespace-nowrap transition-all duration-300 ${
                                activeCertFilter === category
                                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                  : "hover:bg-purple-50 dark:hover:bg-zinc-800 glass"
                              }`}
                            >
                              {category}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="overflow-y-auto h-[calc(100%-80px)] pr-2 scrollbar-custom">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {filteredCertifications.map(
                            (certification, index) => (
                              <div
                                key={index}
                                className="cursor-pointer"
                                onClick={() => handleCardClick(certification)}
                              >
                                <Card className="overflow-hidden glass border-0">
                                  <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                      src={
                                        certification.imageUrl
                                          .replace(".jpeg", "_t.jpeg")
                                          .replace(
                                            "/certifications/",
                                            "/certifications/thumbnails/"
                                          ) || "/placeholder.svg"
                                      }
                                      alt={certification.title}
                                      fill
                                      style={{
                                        objectFit: "cover",
                                        objectPosition: "top",
                                      }}
                                      className="transition-transform duration-700 hover:scale-105"
                                    />
                                  </div>
                                  <CardContent className="p-4">
                                    <h3 className="font-semibold text-lg mb-1 transition-colors">
                                      {certification.title}
                                    </h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
                                      {certification.issuer}
                                    </p>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-500">
                                      {certification.date}
                                    </p>
                                  </CardContent>
                                </Card>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </TabsContent>
              )}
            </Tabs>
          </div>
        </section>
      </div>
    </div>
  );
}

// Detail View Component
function DetailView({
  item,
  onBack,
  type,
}: {
  item: Project | Certification;
  onBack: () => void;
  type: "project" | "certification";
}) {
  return (
    <div className="h-full overflow-y-auto scrollbar-custom detail-enter">
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="mb-4 hover:bg-purple-100/20"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
        <Image
          src={
            type === "project"
              ? (item as Project).imageUrl
              : (item as Certification).imageUrl
          }
          alt={item.title}
          fill
          style={{ objectFit: type === "project" ? "cover" : "contain" }}
        />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h1>

      {type === "project" ? (
        <>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            {(item as Project).description}
          </p>

          <h2 className="text-lg font-semibold mb-2">Technologies</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {(item as Project).technologies.map((tech, index: number) => (
              <Badge
                key={index}
                className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            {(item as Project).liveUrl && (
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600"
                onClick={() => window.open((item as Project).liveUrl, "_blank")}
              >
                View Live
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            )}
            {(item as Project).githubUrl && (
              <Button
                variant="outline"
                className="glass"
                onClick={() =>
                  window.open((item as Project).githubUrl, "_blank")
                }
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center mb-2">
            <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
              {(item as Certification).category}
            </Badge>
            <span className="ml-4 text-sm text-zinc-500 dark:text-zinc-400">
              {(item as Certification).date}
            </span>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Issued by: <strong>{(item as Certification).issuer}</strong>
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            {(item as Certification).description}
          </p>

          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600"
            onClick={() =>
              window.open(
                "https://www.credly.com/users/akhildev-mj/badges",
                "_blank"
              )
            }
          >
            View Certificate
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );
}
