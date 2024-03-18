import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Send } from "lucide-react"
import { RiBriafcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine  } from 'react-icons/ri'
import { LuPackage } from "react-icons/lu";

import HeroImage from "./HeroImage"
import Socials from "./Socials"
import BadgeHero from "./Badge"

const Hero = () => {
    return (
        <section className="py-12 xl:py:24 h-[84vh] xl:pt-28 bg-orange-300 dark:bg-gray-800">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                            Puro Queijo
                        </div>
                        <h1 className="h1 mb-4">A hora mais saborosa do dia</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo dolor illum magnam fuga modi dolores, perspiciatis dolore </p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="#contato">
                                <Button className="gap-x-2"> Entrar em contato <Send size={18}/> </Button>
                            </Link>
                            <Link href="#produtos">
                                <Button className="gap-x-2" variant="secondary"> Ver nossos produtos <LuPackage size={24}/> </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden xl:flex relative">image</div>
                </div>
                <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    )
}
export default Hero