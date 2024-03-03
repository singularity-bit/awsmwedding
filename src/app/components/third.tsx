import styles from './styles.module.css'
import BackgroundImage from './backgroundImage'
import cover from '../../../public/cover2.jpeg'
import { Monsieur_La_Doulaise } from "next/font/google";

const ADDRESS = 'https://www.google.ro/maps/dir//Cioc%C3%A2rlia,+Balkan+Hwy+36,+Chi%C8%99in%C4%83u/@47.0822047,28.8278019,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40c97d59eb45b0f9:0xa843cf2f07ee5066!2m2!1d28.8276126!2d47.0822894?hl=ro'
const monsieur = Monsieur_La_Doulaise({ subsets: ["latin"], weight: ['400'], });
export default function ThirdPage() {
    return <section className={styles.panel}>
        <div className={styles.wrapper}>
            <div className={styles.centerText}>
                <h2 >DETALII EVENIMENT </h2>
                <h3>SÂMBĂTĂ</h3>
                <h3>28 SEPT 2024</h3>
                <h3>17:00</h3>
                <h3>
                    <a
                        target='_blank'
                        href={ADDRESS}
                    >Сomplex de agrement Ciocârlia <br />Chișinău, șoseaua Balcani, 36</a>
                </h3>

            </div>
            <BackgroundImage image={cover} >
                <h1 className={`${monsieur.className} ${styles['heading--small']}`}>Vasile Maria</h1>
            </BackgroundImage>
        </div>
    </section>
}