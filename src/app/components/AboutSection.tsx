"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import img from "./assets/human.png"
import { TabButton } from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="justify-center w-full flex flex-col">
                <li >React JS</li>
                <li >Node.js</li>
                <li >Mysql</li>
                <li>Python</li>
                <li>javascript</li>
                <li>wordpress</li>
                <li>Cypress</li>
            </ul>
        )
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
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul>
                <li>
                    <h5>Secutop</h5>
                    <p>Développeur WEB (Stage 2021) </p>
                </li>
                <br />
                <li>
                    <h5>Orgamy</h5>
                    <p>Développeur Front-End (Alterance 2022-2023) </p>
                </li>
                <br />
                <li>
                    <h5>StudioSanté</h5>
                    <p>Développeur Front-End (Premier poste en 2023)</p>
                </li>
            </ul >
        )
    },
]

function AboutSection() {

    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id)
        })
    }


    return (
        <section className="text-white ">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src={img} alt='' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex-col h-full ' >
                    <h2 className='text-4xl font-bold text-white mb-4'> À propos de moi</h2>
                    <p className='text-base md:text-lg'>
                        {`Je suis un passionné du développement web qui excelle dans la création d'expériences exceptionnelles en Front-end. Fort de plus de 2 ans d'expérience, je me dédie à l'innovation constante. En parallèle, je m'investis activement dans l'amélioration de mes compétences Back-end, explorant des terrains tels que Node.js et Python avec le framework Flask. Mon aspiration est de maîtriser l'ensemble du spectre du développement web pour offrir des solutions complètes et innovantes.`}
                    </p>                 <div className='flex flex-row mt-8 justify-start'>
                        <TabButton selectTab={(() => handleTabChange("skills"))} active={tab === "skills"}> Compétences </TabButton>
                        <TabButton selectTab={(() => handleTabChange("parcours"))} active={tab === "parcours"}> Parcours </TabButton>
                        <TabButton selectTab={(() => handleTabChange("experience"))} active={tab === "experience"}> Experience </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection