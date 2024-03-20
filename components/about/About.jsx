import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger  } from "../ui/tabs"

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react"

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Ryan Davis', 
    },
    {
        icon: <PhoneCall size={20} />,
        text: '(67) 3461 1111', 
    },
    {
        icon: <MailIcon size={20} />,
        text: 'example@gmail.com', 
    },
    {
        icon: <Calendar size={20} />,
        text: 'since 2014', 
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Ryan Davis', 
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Av. Amambai - 250, Naviraí', 
    },
    {
        icon: <User2 size={20} />,
        text: 'Ryan Davis', 
    },
]

const About = () => {
    return (
        <h1>About</h1>
    )
}

export default About