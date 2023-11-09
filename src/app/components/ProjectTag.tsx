import React from 'react'

export const ProjectTag = ({ name, onClick, isSelected }: { name: any, onClick: any, isSelected: boolean }) => {

    const buttonStyles = isSelected ? "text-white bg-primary-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <button className={`${buttonStyles} rounded-full border-2 border-primary-500 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}>
            {name}
        </button>
    )
}
