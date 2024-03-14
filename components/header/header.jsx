'use client'
import Image from "next/image"
import ThemeToggler from "../ThemeToggler"
import { useState, useEffect } from "react"
import Nav from "../Nav/Nav"
import MobileNav from "../mobileNav/MobileNav"


const Header = () => {
    return (
        <header>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                <Image src="/logo.svg" height={40} width={40} alt="logo"/>
                    <div className="flex items-center gap-x-6">
                        <Nav />
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