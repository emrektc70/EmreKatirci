"use client";

import React, { useState } from "react";
import { ProjetcsCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
import projectData from "./projetData.json";

export const Projetcs = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectData.filter((projet) =>
    projet.tags.includes(tag)
  );

  const sortedProjects = [...filteredProjects].sort(
    (a, b) => Number(b.date) - Number(a.date)
  );

  const groupedByYear = sortedProjects.reduce((acc: any, projet) => {
    const year = projet.date;
    if (!acc[year]) acc[year] = [];
    acc[year].push(projet);
    return acc;
  }, {});

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mes projets
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name={"All"}
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name={"Web"}
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name={"Mobile"}
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
      </div>

      <div className="space-y-16">
        {Object.keys(groupedByYear)
          .sort((a, b) => Number(b) - Number(a))
          .map((year) => (
            <div key={year}>
              <div className="flex items-center justify-center mb-8">
                <div className="border-t border-gray-600 flex-grow mr-4"></div>
                <h3 className="text-5xl font-extrabold text-white">{year}</h3>
                <div className="border-t border-gray-600 flex-grow ml-4"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {groupedByYear[year].map((data: any) => (
                  <ProjetcsCard
                    key={data.id}
                    title={data.title}
                    description={data.description}
                    urlProjet={data.urlProjet}
                    previewUrl={data.previewUrl}
                    image={data.image}
                    date={data.date}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
