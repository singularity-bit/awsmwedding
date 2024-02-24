import { useRef } from 'react'
import { useScrollToPage } from '../hooks/scrollTo'
import { Monsieur_La_Doulaise } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import CountDown from './countdown';
import Link from 'next/link';
import { Invitation } from '../lib/invitations';
const monsieur = Monsieur_La_Doulaise({ subsets: ["latin"], weight: ['400'], });

export default function FourthPage({ data }: { data?: Invitation }) {
    const container = useRef(null)

    const onNextPage = useScrollToPage(container, 0)
    const onPrevPage = useScrollToPage(container, 2.8)
    return <section className={styles.panel} ref={container}>
        <div className={styles.wrapper}>
            <div className={styles.rightText}>
                <h1 className={`${monsieur.className} ${styles['heading--medium']}`}>rsvp</h1>
                {data?.confirmed ? <h2>Ne vedem la nunta 😍!</h2> : <h2>Va rugam sa ne confirmati prezenta pana pe data de 28 August</h2>}
                <h3>Pana la eveniment mai sunt <CountDown /></h3>

            </div>
            {!data?.confirmed && <Link href={`/invitations/${data?.invitationId}/confirmed`}>Puteti confirma prin acest link</Link>}
        </div>
        <a className={styles.navigationRight}><FontAwesomeIcon icon={faChevronRight} onClick={onNextPage} /></a>
        <a className={styles.navigationLeft}><FontAwesomeIcon icon={faChevronLeft} onClick={onPrevPage} /></a>
    </section>
}