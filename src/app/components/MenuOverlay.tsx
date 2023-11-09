import React from 'react'
import NavLink from './navLink'

export const MenuOverlay = ({ links }: { links: any[] }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {links.map((link, index) => (
                // eslint-disable-next-line react/jsx-key
                <li key={index}>
                    <NavLink href={link.href} title={link.title} />
                </li>
            ))
            }
        </ul>
    )
}
