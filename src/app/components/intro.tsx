import BackgroundImage from "./backgroundImage";
import CountDown from "./countdown";
import { Cormorant_Garamond } from "next/font/google";
import cover from '../../../public/cover.jpg'

import styles from './styles.module.css'
const garamond_light = Cormorant_Garamond({ subsets: ["latin"], weight: ['300'], });

export default function Intro() {
    return (
        <section className={styles.wrapper} id="homepage">
            <BackgroundImage image={cover} >
                <div className={styles.imageTextWrapper}>
                    <h1 className={`${garamond_light.className} ${styles['heading--large']}`}>Vasile si Maria</h1>
                    {/* <CountDown /> */}
                    <a href="#invitation" >check you invitation</a>
                </div>
            </BackgroundImage>
        </section>
    )
}