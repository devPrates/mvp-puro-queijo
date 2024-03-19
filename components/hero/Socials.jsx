'use client'

import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiMailSendFill  } from 'react-icons/ri'
import Link from 'next/link'

const icons = [
    {
       path: '/',
       name: <RiInstagramFill /> 
    },
    {
        path: '/',
        name: <RiLinkedinFill /> 
     },
     {
        path: '/',
        name: <RiFacebookFill /> 
     },
     {
        path: '/',
        name: <RiMailSendFill  /> 
     },
]

const Socials = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={`${containerStyles}`}> 
            {icons.map((icon, index)=>{
                return <Link href={icon.path} key={index}>
                    <div className={`${iconsStyles}`}>
                        {icon.name}
                    </div>
                </Link>
            })}
        </div>
    )
}
export default Socials