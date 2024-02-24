import { useRef } from 'react'
import { useScrollToPage } from '../hooks/scrollTo'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import BackgroundImage from './backgroundImage'
import cover from '../../../public/cover2.jpeg'
import { Monsieur_La_Doulaise } from "next/font/google";

const monsieur = Monsieur_La_Doulaise({ subsets: ["latin"], weight: ['400'], });


export default function ThirdPage() {
    const container = useRef(null)

    const onNextPage = useScrollToPage(container, 4)
    const onPrevPage = useScrollToPage(container, 1.5)
    return <section className={styles.panel} ref={container}>
        <div className={styles.wrapper}>
            <div className={styles.centerText}>
                <h2 >DETALII EVENIMENT </h2>
                <h3>SAMBATA</h3>
                <h3>28 SEPT 2024</h3>
                <h3>17:00</h3>
                <h3>Сomplex de agrement Ciocârlia</h3>
            </div>
            <BackgroundImage image={cover} >
                <h1 className={`${monsieur.className} ${styles['heading--small']}`}>Vasile Maria</h1>
            </BackgroundImage>
        </div>
        <a className={styles.navigationRight}><FontAwesomeIcon icon={faChevronRight} onClick={onNextPage} /></a>
        <a className={styles.navigationLeft}><FontAwesomeIcon icon={faChevronLeft} onClick={onPrevPage} /></a>
    </section>
}