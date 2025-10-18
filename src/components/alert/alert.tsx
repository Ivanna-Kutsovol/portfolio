'use client';

import React, {useEffect, useState} from "react";
import stl from "./alert.module.scss";
import Image from "next/image";

import Solid from "../../../public/solid.gif";

export interface AlertProps {
    text: string;
    duration?: number;
    onClose: () => void;
}
const Alert: React.FC<AlertProps>=({text, duration = 3000, onClose}) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);
        const removeTimer = setTimeout(onClose, duration + 300);

        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        }
    }, [text, duration, onClose]);

    return(
    <div className={`${stl.alert} ${visible ? stl.show : stl.hide}`}>
        <Image src={Solid} alt="solid" width={50} height={50}/>
        <p>{text}</p>
        <button className={stl.alert__button} onClick={onClose}>✖</button>
    </div>
)
};

export default Alert;