'use client'
import useIsMobile from '../hooks/useIsMobile';
import CurvedText from './CurvedText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.css'
import { Monsieur_La_Doulaise } from "next/font/google";

const monsieur = Monsieur_La_Doulaise({ subsets: ["latin"], weight: ['400'], });

export default function FirstPage() {
    const { isMobile, width } = useIsMobile(537)
    return (
        <section className={styles.panel}>
            <div className={styles.wrapper}>

                <CurvedText text='INVITAȚIE  LA NUNTĂ' arc={70} radius={isMobile ? width * 0.75 : 400} />
                <h1 className={`${monsieur.className} ${styles['heading--large']}`}>V <br />M</h1>
                <CurvedText text='28.09.2024 ' radius={isMobile ? width * (-0.85) : -400} arc={50} reverseText={true} />

                <h2 className={styles.floating}> Scroll <FontAwesomeIcon icon={faArrowDown} /></h2>
            </div>
        </section>
    )
}