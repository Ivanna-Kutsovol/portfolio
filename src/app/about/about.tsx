'use client';

import React, {useState, useEffect} from "react";
import stl from "./about.module.scss";
import Image from "next/image";

import Iam from "../../../public/about/iam.svg";

const About = () => {
    const text = "I'm a Frontend Developer.";
    const speed = 100;
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[index]);
                setIndex(prev => prev + 1);
            }, speed)
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);
    return(
        <section className={stl.about}>
            <section className={stl.about__first}>
                <div className={stl.about__containerImage}>
                    <h1 className={stl.about__title}>Hello! I Am <span className={stl.about__name}>Ivanna</span> </h1>
                    <Image className={stl.about__iam} src={Iam} alt="Ivanna" width={251} height={259}/>
                </div>
            
            <div className={stl.about__text}>
                <h2 className={stl.about__subtitle}>A Frontend Designer who</h2>
                <h3 className={stl.about__highlight}>Judges a product by its <span>UI</span>...</h3>
                <h4 className={stl.about__quote}>Because if the interface doesn’t speak to you, what will?</h4>
            </div>
            </section>
            <div className={stl.about__bio}>
                <p className={stl.about__bio__title}>{displayText}
                    <span className={stl.about__bio__cursor}>|</span></p>
                <p className={stl.about__bio__text}>Self-taught Frontend Developer still in university, already coding for over a year.
                    I turn ideas into smooth, interactive experiences that feel as good as they look.</p>
            </div>
        </section>
    )
}

export default About;