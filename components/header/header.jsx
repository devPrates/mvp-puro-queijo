'use client'
import Image from "next/image"
import ThemeToggler from "../ThemeToggler"
import { useState, useEffect } from "react"
import Nav from "../Nav/Nav"
import MobileNav from "../mobileNav/MobileNav"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Header = () => {
    const [header, setHeader] = useState(false)
    const pathname = usePathname()
    
    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false)
        })

        return() => window.removeEventListener('scroll', scrollYPos)
    })
    return (
        <header className={`${ header ? 'py-4 bg-orange-300 shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent' } sticky top-0 z-30 transition-all ${ pathname === '/' && 'bg-[#fef9f5]' }`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                <Link href='/'>
                    <Image 
                        src="/Logo.png"
                        height={60} 
                        width={60} 
                        priority
                        alt="logo"
                    />
                </Link>
                    <div className="flex items-center gap-x-6">
                        <Nav 
                            containerStyles="hidden xl:flex gap-x-8 items-center"
                            linkStyles='relative hover:text-primary transition-all'
                            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
                        />
                        <ThemeToggler />

                        <div className="xl:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>         
            </div>
        </header>
    )
}

export default Header