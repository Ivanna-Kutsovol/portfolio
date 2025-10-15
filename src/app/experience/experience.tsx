import React from "react";
import stl from "./experience.module.scss";
import Link from "next/link";
import Image from "next/image";

const array = [{
    title: 'CIB on the Mobile',
    description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    icon: "/experience/icon1.svg",
    button: "/#contact",
},
{
    title: 'CIB on the Mobile',
    description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    icon: "/experience/icon2.svg",
    button: "/#contact",
},
{
    title: 'CIB on the Mobile',
    description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    icon: "/experience/icon3.svg",
    button: "/#contact",
},
{
    title: 'CIB on the Mobile',
    description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    icon: "/experience/icon4.svg",
    button: "/#contact",
}]

const Experience = () => {
    return (
        <section className={stl.experience}>
            <h1 className={stl.experience__title}>Work Experience</h1>
            <section className={stl.experience__container}>
                {array.map((item, index) => (
                    <div key={index} className={stl.experience__card}>
                        <Image src={item.icon} alt="icon" width={80} height={75} className={stl.experience__icon}/>
                        <div className={stl.experience__cardText}>
                            <h2 className={stl.experience__cardTitle}>{item.title}</h2>
                            <p className={stl.experience__cardDescription}>{item.description}</p>
                            <Link href={item.button} className={stl.experience__cardButton}>Learn more</Link>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
};

export default Experience;