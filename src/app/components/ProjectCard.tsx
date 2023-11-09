import React from 'react';
import Image from 'next/image';
import info1 from './assets/ktccar.png';
import info2 from './assets/orgavita.png';
import info3 from './assets/toshoBox.png';
import info4 from './assets/info1.jpg';
import info5 from './assets/cypress.png';
import info6 from './assets/info1.jpg';
import Link from 'next/link';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';


export const ProjetcsCard = ({ id, title, description, urlProjet, previewUrl }: { id: number; title: string; description: string, urlProjet: string, previewUrl: string }) => {
    let imageSrc = '';

    switch (id) {
        case 1:
            imageSrc = info1.src;
            break;
        case 2:
            imageSrc = info2.src;
            break;
        case 3:
            imageSrc = info3.src;
            break;
        case 4:
            imageSrc = info4.src;
            break;
        case 5:
            imageSrc = info5.src;
            break;
        case 6:
            imageSrc = info6.src;
            break;

        default:
            break;
    }
    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{ background: `url(${imageSrc})`, backgroundSize: "cover" }}
            >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                    {urlProjet.length > 0 &&
                        <Link
                            href={urlProjet}
                            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                        >
                            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                        </Link>
                    }
                    {
                        previewUrl.length > 0 &&
                        <Link
                            href={previewUrl}
                            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                        >
                            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                        </Link>
                    }
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    );
};
