
import BackgroundImage from "./backgroundImage";
import { Monsieur_La_Doulaise } from "next/font/google";
import cover from '../../../public/cover.jpg'

import styles from './styles.module.css'
const monsieur = Monsieur_La_Doulaise({ subsets: ["latin"], weight: ['400'], });

export default function SecondPage({ names }: { names?: string }) {
    return (
        <section className={styles.panel}>
            <div className={styles.wrapper}>
                <BackgroundImage image={cover} >
                    <h1 className={`${monsieur.className} ${styles['heading--small']}`}>Vasile Maria</h1>
                </BackgroundImage>
                <div className={styles.columnWrapper}>
                    <section>
                        <h1 className={styles.capitalize}>Draga {names ?? 'invitat'}</h1>
                        <p>Cu bucurie în inimi și speranță în suflete, vă invităm să ne fiți alături în ziua în care ne unim destinele. Vă așteptăm cu drag la nunta noastră, să celebrăm împreună iubirea și fericirea noastră.</p>
                    </section>
                </div>
            </div>

        </section>
    )
}