
import BackgroundImage from "./backgroundImage";
import { Monsieur_La_Doulaise } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import cover from '../../../public/cover.jpg'

import styles from './styles.module.css'
import { useScrollToPage } from "../hooks/scrollTo";
import { useRef } from "react";
const monsieur = Monsieur_La_Doulaise({ subsets: ["latin"], weight: ['400'], });



export default function SecondPage({ names }: { names?: string }) {
    const container = useRef(null)

    const onNextPage = useScrollToPage(container, 2.2)
    const onPrevPage = useScrollToPage(container, 0)
    return (
        <section className={styles.panel} ref={container}>
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
            <a className={styles.navigationRight}><FontAwesomeIcon icon={faChevronRight} onClick={onNextPage} /></a>
            <a className={styles.navigationLeft}><FontAwesomeIcon icon={faChevronLeft} onClick={onPrevPage} /></a>
        </section>
    )
}