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
                role: 'Puro Queijo',
                years: '2016 - 2024'
            },
            {
                company: 'Puro Queijo',
                role: 'Puro Queijo',
                years: '2016 - 2024'
            },
            {
                company: 'Puro Queijo',
                role: 'Puro Queijo',
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
                                            <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, fugit recusandae maiores architecto laboriosam, ea eveniet ullam, temporibus eaque eius quisquam fuga saepe.
                                            </p>
                                            {/* Icons */}
                                            <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                                {infoData.map((item, index) => {
                                                    return(
                                                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                          <div className="text-primary">{item.icon}</div>  
                                                          <div>{item.text}</div>  
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </TabsContent>


                                    {/* servico */}
                                    <TabsContent value="servico">
                                       <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                        {/* Qualifications experience */}
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/* experience */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'Experience').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8 ">
                                                {getData(qualificationData, 'Experience').data.map((item, index)=>{
                                                    const { company, role, years } = item
                                                    return(
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-5 group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                </div>
                                            </div>
                                            {/* Educação */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap size={28} />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'education').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8 ">
                                                {getData(qualificationData, 'education').data.map((item, index)=>{
                                                    const { university, qualification, years } = item
                                                    return(
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-5 group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                </div>
                                            </div>
                                        </div>
                                       </div>
                                    </TabsContent>

                                    {/* contato */}
                                    <TabsContent value="contato">
                                        <div className="text-center xl:text-left">
                                            <h3 className="h3 mb-8">Tools I use Everyday</h3>
                                            <div>
                                                <h4>Skills</h4>
                                            </div>
                                        </div>
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