"use client"
import Link from "next/link"
import { Button } from "../ui/button"

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import ProductCard from "./ProductCard"


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

const Product = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Products</h2>
                    <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus quos obcaecati dolores voluptates temporibus illum iure is</p>
                    <Link href="/">
                            <Button>All Products</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper className="h-[480px]" 
                        slidesPerView={1}
                        breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {/* products for slides */}
                        {ProductData.slice(0, 4).map((product, index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <ProductCard product={product} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Product