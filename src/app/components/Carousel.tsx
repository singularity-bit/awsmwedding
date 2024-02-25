"use client"
import FirstPage from "./first";
import FourthPage from "./fourth";
import SecondPage from "./second";
import ThirdPage from "./third";
import styles from './styles.module.css'
import { useRef } from "react";
import useSlideshow from "../hooks/useSlideShow";
import { Invitation } from "../lib/invitations";
export default function Carousel({ data }: { data: Invitation }) {
    const main = useRef(null)
    useSlideshow(main, `.${styles.panel}`)
    const names = data?.persons?.map(person => person.name)?.toString()

    return <div className={styles.container} ref={main}>
        <FirstPage />
        <SecondPage names={names} />
        <ThirdPage />
        <FourthPage data={data} />
    </div>
}