'use client'
import React, { ReactElement, useState } from 'react'
import Link from 'next/link'
import linkedin from './assets/linkedin-icon.svg'
import github from "./assets/github-icon.svg"
import Image from 'next/image'

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">
                    Me connecter
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    {`Si vous souhaitez me contacter, n'hésitez pas à utiliser le formulaire dédié. Je serais ravi de vous écouter et de répondre à vos messages.`}
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/emrektc70/">
                        <Image src={github} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/emre-katirci-b5608b1b4/">
                        <Image src={linkedin} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <p className="text-green-500 text-sm mt-2">
                        E-mail envoyé avec succès!
                    </p>
                ) : (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Votre email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Sujet
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Sujet"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Parlons de..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Envoyer le message
                        </button>
                    </form>
                )}
            </div>
        </section>
    )
}

export default EmailSection