"use client"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineMenu, AiOutlineWhatsApp } from "react-icons/ai";
import { useState } from "react";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
    return(
            <nav className="w-full h-24 shadow-xl bg-gray-300">
                <div className="container flex justify-between items-center h-full w-full px-4 2xl:px16">
                    <Link href="/">
                        <Image 
                            src="/images/logo.svg"
                            width={60}
                            height={60}
                            alt="Logo Puro Queijo"
                            className="cursor-pointer"
                            priority
                        />
                    </Link>
                    <div className="hidden sm:flex">
                        <ul className="hidden sm:flex">
                           <Link href="/about">
                            <li className="ml-10 uppercase hover:border-b text-xl">home</li>
                           </Link>
                           <Link href="/about">
                            <li className="ml-10 uppercase hover:border-b text-xl">sobre</li>
                           </Link>
                           <Link href="/about">
                            <li className="ml-10 uppercase hover:border-b text-xl">produtos</li>
                           </Link>
                           <Link href="/about">
                            <li className="ml-10 uppercase hover:border-b text-xl">contatos</li>
                           </Link>
                        </ul>
                    </div>
                    <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
                <div className={
                    menuOpen 
                    ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#d6d6d6] p-10 ease-in duration-500" 
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }>
                    <div className="flex w-full items-center justify-end">
                        <div onClick={handleNav} className="cursor-pointer">
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                        <div className="flex-col py-4">
                            <ul>
                                <Link href="/">
                                    <li onClick={() => setMenuOpen(false)}
                                    className="py-4 cursor-pointer">
                                        Home
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li onClick={() => setMenuOpen(false)}
                                    className="py-4 cursor-pointer">
                                        Home
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li onClick={() => setMenuOpen(false)}
                                    className="py-4 cursor-pointer">
                                        Home
                                    </li>
                                </Link>
                                <Link href="/">
                                    <li onClick={() => setMenuOpen(false)}
                                    className="py-4 cursor-pointer">
                                        Home
                                    </li>
                                </Link>
                            </ul>
                        </div>  
                        <div className="flex flex-row justify-around pt-10 items-center">
                            <AiOutlineInstagram size={30} className="cursor-pointer" />
                            <AiOutlineFacebook size={30} className="cursor-pointer" />
                            <AiOutlineMail size={30} className="cursor-pointer" />
                            <AiOutlineWhatsApp size={30} className="cursor-pointer" />

                        </div>
                </div>
            </nav>
    )
}