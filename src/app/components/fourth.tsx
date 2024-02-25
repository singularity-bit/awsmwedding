'use client'
import { useRef, MouseEvent, useState } from 'react'
import { Monsieur_La_Doulaise } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import CountDown from './countdown';
import { Invitation } from '../lib/invitations';
import { useRouter } from 'next/navigation';
import BackgroundImage from './backgroundImage';
import cover from '../../../public/cover3.jpg'
const monsieur = Monsieur_La_Doulaise({ subsets: ["latin"], weight: ['400'], });

export default function FourthPage({ data }: { data: Invitation }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const onConfirm = async (e: MouseEvent<HTMLElement>, id: string) => {
        e.preventDefault()
        setIsLoading(true)
        await fetch(`/api/invitations`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        }).then(res => res.json()).then(() => {
            router.push(`/invitations/${id}/confirmed`)
            setIsLoading(false)
        })

    }
    return <section className={styles.panel}>
        <div className={styles.wrapper}>

            <div className={styles.rightText}>
                <h1 className={`${monsieur.className} ${styles['heading--medium']}`}>rsvp</h1>
                {data?.confirmed ? <h2>Ne vedem la nunta 😍!</h2> : <h2>Va rugam sa ne confirmati prezenta pana pe data de 1 August</h2>}
                <h3>Pana la eveniment mai sunt <CountDown /></h3>

            </div>
            <BackgroundImage image={cover} >
                <h1 className={`${monsieur.className} ${styles['heading--small']}`}>Vasile Maria</h1>
            </BackgroundImage>
            {!data?.confirmed && (
                isLoading ? <FontAwesomeIcon icon={faSpinner} spin></FontAwesomeIcon> :
                    <h3>
                        <a
                            href={`/invitations/${data?.invitationId}/confirmed`} onClick={(e) => onConfirm(e, data.invitationId)} aria-disabled>Puteti confirma prin acest link </a>
                    </h3>

            )}
        </div>
    </section>
}