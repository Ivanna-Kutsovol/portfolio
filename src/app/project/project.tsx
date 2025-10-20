'use client';
import React, { useEffect, useState } from "react";
import stl from "./project.module.scss";
import Image from "next/image";
import iconClick from '../../../public/project/solidClick.svg';

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const array = [
    {
        title: 'Positivus Multi-Page Website',
        link: 'https://positivus-ivanna-projects.vercel.app/',
        cover: '/project/positivusMobile.svg',
        description: 'Multi-page agency website built with Next.js and React. Responsive design, reusable components, animations, sliders, and form validation.',
        desktopCover: '/project/positivus.png',
        desktopDescription: 'Positivus is a pet-project multi-page website for digital marketing agencies. Built with Next.js and React, it demonstrates a clean, modern, and responsive design across multiple pages, including services, case studies, team, testimonials, contact form, and footer.'
    },
    {
        title: 'Toy House Online Store',
        link: 'https://toy-house-six.vercel.app/',
        cover: '/project/toyhouseMobile.svg',
        description: 'Pet-project online toy store built with Next.js and React, featuring a product catalog, shopping cart, order form, and interactive UI elements.',
        desktopCover: '/project/toyhouse.png',
        desktopDescription: 'Toy House is a pet-project online toy store.The project is built with Next.js and demonstrates key features of a modern e-commerce application: product catalog, shopping cart with total calculation, order form, as well as additional interactive elements and advanced UX.'
    }
]

const Project = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize', handleResize);
        }
    },[]);

    return (
        <section className={stl.project}>
            <section className={stl.container}>
                {isMobile ? (
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 2500 }}
                        loop={true}
                    >
                {...array.map((item, index) => (
                    <SwiperSlide key={index} className={stl.project__card}>
                        <h1 className={stl.project__text}>Featured  Project</h1>
                        <h2 className={stl.project__title}>{item.title}</h2>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <Image src={item.cover} alt="cover" width={375} height={600} className={stl.project__image} priority/>
                        </a>
                        <p className={stl.project__description}>{item.description}</p>
                    </SwiperSlide>
                ))}
                </Swiper>
                ) : (
                    <div className={stl.desktop}>
                        {array.map((item, index) => (
                            <div key={index} className={`${stl.desktop__card} ${index % 2 === 0 ? stl.leftText : stl.rightText}`}>
                                <div className={stl.desktop__text}>
                                    <h1 className={stl.project__text}>Featured  Project</h1>
                                    <h2 className={stl.project__title}>{item.title}</h2>
                                    <p className={stl.project__description}>{item.desktopDescription}</p>
                                    <div className={stl.desktop__icons}>
                                        <Image src={iconClick} alt="icon" width={30} height={30} className={stl.desktop__icon}/>
                                        <Image src={iconClick} alt="icon" width={30} height={30} className={stl.desktop__icon}/>
                                    </div>
                                </div>
                                <div className={`${stl.desktop__imageWrapper} ${index === 0 ? stl.bgDouble : stl.bgSingle}`}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={item.desktopCover} alt="cover" width={568} height={340} className={stl.project__image}/>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </section>
    )
};

export default Project;