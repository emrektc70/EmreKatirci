"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import img from "./assets/human.png";
import { TabButton } from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="justify-center w-full flex flex-col gap-4">
        {/* --- Compétences principales --- */}
        <li>
          <h4 className="font-semibold text-lg mb-1">
            Compétences principales
          </h4>
          <p>React.js · Next.js · React Native</p>
        </li>

        {/* --- Technologies utilisées --- */}
        <li>
          <h4 className="font-semibold text-lg mb-1">Technologies utilisées</h4>
          <p>JavaScript · TypeScript · Node.js · MySQL · API REST</p>
        </li>

        {/* --- CMS --- */}
        <li>
          <h4 className="font-semibold text-lg mb-1">CMS</h4>
          <p>WordPress</p>
        </li>

        {/* --- Tests & outils --- */}
        <li>
          <h4 className="font-semibold text-lg mb-1">Tests & outils</h4>
          <p>Cypress · Git · Figma</p>
        </li>
      </ul>
    ),
  },

  {
    title: "Parcours",
    id: "parcours",
    content: (
      <ul>
        <li>BAC STI2D (2020) </li>
        <li>BTS SIO spécialté SLAM (2022) </li>
        <li>{`Bachelor Concepteur développeur d'application (2023)`} </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>
          <h5>Secutop</h5>
          <p>Développeur Web (Stage – 2021)</p>
        </li>
        <br />
        <li>
          <h5>Orgamy</h5>
          <p>Développeur Front-End (Alternance – 2022 à 2023)</p>
        </li>
        <br />
        <li>
          <h5>Studiosystems</h5>
          <p>Développeur Front-End & Mobile (Actuellement)</p>
        </li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={img} alt="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">
            {" "}
            À propos de moi
          </h2>
          <p className="text-base md:text-lg">
            Développeur passionné, je conçois des interfaces modernes et
            performantes avec React.js, Next.js et React Native. Je travaille au
            sein d’équipes agiles, en intégrant des API REST pour créer des
            expériences fluides et connectées. Mon objectif : allier design,
            performance et clarté pour offrir des produits de qualité.{" "}
          </p>{" "}
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Compétences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("parcours")}
              active={tab === "parcours"}
            >
              {" "}
              Parcours{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
