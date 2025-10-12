"use client";
import React from "react";
import Image from "next/image";
import img from "./assets/avatar.png";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="lg: py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-selft-start">
          <h1 className="text-white mb-4 text-4xl  lg:text-8xl font-extrabold lg:leading-normal sm:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-secondary-600 ">
              {" "}
              {"Emre Katirci"}{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Passioné de l'informatique",
                5000,
                "Développeur Front-end",
                5000,
                "Développeur React",
                5000,
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
              className='"text-white mb-4 text-3xl  lg:text-6xl font-extrabold sm:text-4xl'
            />{" "}
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Bienvenue dans mon portfolio ! Je suis Emre Katirci, développeur
            passionné spécialisé dans le Front-end et le développement mobile.
            Fort de plus de 5 ans d’expérience en développement Front-end et 2
            ans dans le mobile, j’aime créer des interfaces modernes,
            performantes et centrées sur l’utilisateur. Toujours curieux et en
            veille sur les nouvelles technologies, je m’efforce d’apporter des
            solutions créatives et efficaces à chaque projet.{" "}
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/emre-katirci-b5608b1b4/"
              target="_blank"
              rel="noopener"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500  hover:bg-slate-200 text-white ">
                Suivez-moi
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full  bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={img}
              alt="hero image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
