'use client'
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import React, { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import ProductCard from "@/components/produtos/ProductCard";

const ProductData = [
    {
        image: '/work/1.png',
        category: 'React js',
        name: 'Nexa Website',
        description: 'Hello World Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aut officiis cum. Accusamus, blanditiis odio',
        link: '/',
        github: '/',

    },
    {
        image: '/work/4.png',
        category: 'next js',
        name: 'Solstice Website',
        description: 'Hello World Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aut officiis cum. Accusamus, blanditiis odio',
        link: '/',
        github: '/',

    },
    {
        image: '/work/2.png',
        category: 'next js',
        name: 'Lumina Website',
        description: 'Hello World Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aut officiis cum. Accusamus, blanditiis odio',
        link: '/',
        github: '/',

    },
    {
        image: '/work/1.png',
        category: 'next js',
        name: 'Evolve Website',
        description: 'Hello World Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aut officiis cum. Accusamus, blanditiis odio',
        link: '/',
        github: '/',

    },
    {
        image: '/work/3.png',
        category: 'next js',
        name: 'Ignite Website',
        description: 'Hello World Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aut officiis cum. Accusamus, blanditiis odio',
        link: '/',
        github: '/',

    },
    {
        image: '/work/4.png',
        category: 'next js',
        name: 'Envision Website',
        description: 'Hello World Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aut officiis cum. Accusamus, blanditiis odio',
        link: '/',
        github: '/',

    },
    {
        image: '/work/1.png',
        category: 'next js',
        name: 'Serenity Website',
        description: 'Hello World Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aut officiis cum. Accusamus, blanditiis odio',
        link: '/',
        github: '/',

    },
    {
        image: '/work/3.png',
        category: 'next js',
        name: 'Nova Website',
        description: 'Hello World Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aut officiis cum. Accusamus, blanditiis odio',
        link: '/',
        github: '/',

    },
    {
        image: '/work/2.png',
        category: 'next js',
        name: 'Zenith Website',
        description: 'Hello World Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aut officiis cum. Accusamus, blanditiis odio',
        link: '/',
        github: '/',

    },
]


const ProductPage = () => {
    return (
        <>
        <Header />
            <section className="min-h-screen pt-12">
                Pagina de Produtos
            </section>
        <Footer />
        </>
    )
}

export default ProductPage