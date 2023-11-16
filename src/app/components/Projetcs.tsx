'use client'

import React, { useState } from 'react'
import { ProjetcsCard } from './ProjectCard'
import { ProjectTag } from './ProjectTag'

const projectData = [
    {
        id: 1,
        title: "KTCCAR",
        description: "Pour valider mon année de bachelor, nous devons créer un site fullstack. J'ai opté pour le projet KTCCar, visant à mettre en relation les passionnés d'automobile. Côté Front-end, j'ai choisi d'utiliser React.js, tandis que côté Back-end, j'ai opté pour Nest.js.",
        image: "/assets/img.jpg",
        tags: ["All", "Web"],
        urlProjet: "https://github.com/emrektc70/ktccar_backoffice",
        previewUrl: "https://ktccar.vercel.app/",
    },
    {
        id: 2,
        title: "Orgavita",
        description: "Pendant mon alternance chez Orgamy, ma principale mission était d'assurer la maintenance du site Orgavita, une plateforme facilitant la mise en relation entre les praticiens et les patients. En tant que développeur Front-end, mon objectif était d'intégrer de nouvelles fonctionnalités au site et de corriger les erreurs existantes.",
        image: "/assets/info1.jpg",
        tags: ["All", "Web"],
        urlProjet: "",
        previewUrl: "https://praticien.orgavita.fr/register"


    },
    {
        id: 3,
        title: "ToshoBox",
        description: "Pendant mon alternance chez Orgamy, j'ai participé à la réalisation d'un projet appelé ToshoBox, axé sur la vente de mangas. Ma mission consistait à développer la partie Front-end du site en concordance avec la maquette élaborée par le designer",
        image: "/assets/img.jpg",
        tags: ["All", "Web"],
        urlProjet: "",
        previewUrl: "https://box.tosho.fr/"


    },
    {
        id: 4,
        title: "KTCCAR API",
        description: "Le backend de KTCCar a été réalisé avec Nest.js, un framework basé sur Node.js.",
        image: '/assets/info.jpg',
        tags: ["All"],
        urlProjet: "",
        previewUrl: ""

    },
    {
        id: 5,
        title: "Cypress",
        description: "Durant mon alternance chez Orgamy, nous avons effectué des tests avec Cypress côté Front-end pour automatiser des tests côté client. De plus, j'ai utilisé Cypress pour des projets personnels.",
        image: '/assets/info.jpg',
        tags: ["All"],
        urlProjet: "",
        previewUrl: "",


    }
]


export const Projetcs = () => {

    const [tag, setTag] = useState('All')

    const handleTagChange = (newTag: string) => {
        setTag(newTag)
    }

    const filterProjects = projectData.filter((projet) => {
        return projet.tags.includes(tag);
    });


    return (
        <section id="projects">
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'> Mes projets</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2  py-6'>
                <ProjectTag name={"All"} onClick={handleTagChange} isSelected={tag == "All"} />
                <ProjectTag name={"Web"} onClick={handleTagChange} isSelected={tag == "Web"} />

            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filterProjects.map((data) =>
                    <ProjetcsCard
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        description={data.description}
                        urlProjet={data.urlProjet}
                        previewUrl={data.previewUrl}
                    />)}
            </div>
        </section>
    )
}

