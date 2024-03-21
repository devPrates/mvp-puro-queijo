import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react"
import HeroImage from "../hero/HeroImage"

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

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Exemple University',
                qualification: 'Puro Queijo',
                years: '2016 - 2024'
            },
            {
                university: 'Exemple University',
                qualification: 'Puro Queijo',
                years: '2016 - 2024'
            },
            {
                university: 'Exemple University',
                qualification: 'Puro Queijo',
                years: '2016 - 2024'
            },

        ]
    },
    {
        title: 'Experience',
        data: [
            {
                company: 'Puro Queijo',
                qualification: 'Puro Queijo',
                years: '2016 - 2024'
            },
            {
                company: 'Puro Queijo',
                qualification: 'Puro Queijo',
                years: '2016 - 2024'
            },
            {
                company: 'Puro Queijo',
                qualification: 'Puro Queijo',
                years: '2016 - 2024'
            },

        ]
    }
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'html, css',
            },
            {
                name: 'html, css',
            },
            {
                name: 'html, css',
            },
            {
                name: 'html, css',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
        ]
    }
]
const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24" id="#about">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    Quem Somos
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* imagem */}
                    <div className="hidden xl:flex flex-1 relative">
                        <HeroImage
                            containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                            imgSrc='/about/developer.png'
                        />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue='sobre'>
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger clasname="w-[162px] xl:w-auto" value="sobre">Sobre Nós</TabsTrigger>
                                <TabsTrigger clasname="w-[162px] xl:w-auto" value="servico">Nossos Serviços</TabsTrigger>
                                <TabsTrigger clasname="w-[162px] xl:w-auto" value="contato">Contato</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                                <div className="text-lg mt-12 xl:mt-8">
                                    {/* Sobre */}
                                    <TabsContent value="sobre">
                                        <div className="text-center xl:text-left">
                                            <h3 className="h3 mb-4">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            </h3>
                                            <p className="subtitle max-w-xl max-auto xl:mx-0">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fugit recusandae maiores architecto laboriosam, ea eveniet ullam, temporibus eaque eius quisquam fuga saepe.
                                            </p>
                                        </div>
                                    </TabsContent>
                                    {/* servico */}
                                    <TabsContent value="servico">
                                        serviço infos
                                    </TabsContent>

                                    {/* contato */}
                                    <TabsContent value="contato">
                                        Contato infos
                                    </TabsContent>
                                </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About