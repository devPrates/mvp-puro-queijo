import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { AlignJustify } from "lucide-react"

import Nav from "../Nav/Nav"
import Socials from "../hero/Socials"
import Image from "next/image"

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild >
                <AlignJustify className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
                <div className="flex flex-col items-center justify-between h-full py-8">
                    <div className="flex flex-col items-center gap-y-6">
                        <Image 
                            src="/logo.png"
                            height={40}
                            width={40}
                            alt="Logo"
                        />
                        <Nav 
                            containerStyles='flex flex-col items-center gap-y-6' 
                            linkStyles='text-2xl'
                        />
                    </div>
                        <Socials    
                            containerStyles='flex gap-x-4'
                            iconsStyles='text-2xl'
                        />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav