import React, { useState, useEffect } from "react";
import stl from "./skills.module.scss";
import Image from "next/image";

const Skills = () => {
    return (
        <section className={stl.skills}>
            <section className={stl.skills__text}>
                <h1 className={stl.skills__title}>Using these skills, <span className={stl.skills__highlight}>I craft websites</span></h1>
                <h2 className={stl.skills__subtitle}>that don’t just work — they stand out.</h2>
            </section>
            <section className={stl.skills__container}>
                <div className={stl.skills__icons}>
                    <div className={stl.skills__row}>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/github.svg' alt="github" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/react.svg' alt="react" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/typescript.svg' alt="typescript" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/node.svg' alt="node" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/postman.svg' alt="postman" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/wp.svg' alt="wp" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/git.svg' alt="git" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    </div>
                    <div className={stl.skills__row}>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/figma.svg' alt="figma" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/next.svg' alt="next" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/js.svg' alt="js" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/css3.svg' alt="css3" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/sass.svg' alt="sass" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/mongoDB.svg' alt="mongoDB" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    </div>
                </div>
                <div className={stl.skills__lines}>
                    <span className={stl.skills__line}/>
                    <span className={stl.skills__line}/>
                    <span className={stl.skills__line}/>
                    <span className={stl.skills__line}/>
                    <span className={stl.skills__line}/>
                    <span className={stl.skills__line}/>
                </div>
                <section className={stl.skills__centerWrapper}>
                <div className={stl.skills__center}>
                    <Image src='/skills/center.svg' alt="center" width={76} height={90} className={stl.skills__centerImg}/>
                </div>
                <div className={stl.skills__centerLines}>
                    <span className={stl.skills__centerLine}/>
                    <span className={stl.skills__centerLine}/>
                    <span className={stl.skills__centerLine}/>
                </div>
                </section>
            </section>
        </section>
    );
};

export default Skills;