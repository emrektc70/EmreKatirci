"use client"
import React from 'react'
import Image from 'next/image'
import img from './assets/avatar.png'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'


export default function HeroSection() {
    return (
        <section className="lg: py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-8 place-self-center text-center sm:text-left justify-selft-start">
                    <h1 className="text-white mb-4 text-4xl  lg:text-8xl font-extrabold lg:leading-normal sm:text-5xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-secondary-600 "> {'Emre Katirci'} {' '}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Passioné de l\'informatique',
                                5000,
                                'Développeur Front-end',
                                5000,
                                'Développeur React',
                                5000
                            ]}
                            wrapper="span"
                            speed={5}
                            // style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                            className='"text-white mb-4 text-3xl  lg:text-6xl font-extrabold sm:text-4xl'
                        />                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                        {'Bienvenue dans mon portfolio ! Je suis Emre Katirci, un passionné de 21 ans. Avec plus de 2 ans d\'expérience dans le développement Front-end, je m\'efforce constamment d\'explorer de nouvelles perspectives et de perfectionner mes compétences.'}
                    </p>
                    <div>
                        <Link href="https://www.linkedin.com/in/emre-katirci-b5608b1b4/" target="_blank" rel="noopener">
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500  hover:bg-slate-200 text-white '>
                                Suivez-moi
                            </button>
                        </Link>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-primary-500 to-secondary-500  hover:bg-slate-200 text-white  mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'> Télécharger mon cv</span> </button>
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full  bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src={img}
                            alt='hero image'
                            width={300}
                            height={300}
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ' />
                    </div>
                </div>
            </div>
        </section>
    )
}
