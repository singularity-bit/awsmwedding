import styles from './styles.module.css'
import BackgroundImage from './backgroundImage'
import cover from '../../../public/cover2.jpeg'
import { Monsieur_La_Doulaise } from "next/font/google";

const monsieur = Monsieur_La_Doulaise({ subsets: ["latin"], weight: ['400'], });
export default function ThirdPage() {
    return <section className={styles.panel}>
        <div className={styles.wrapper}>
            <div className={styles.centerText}>
                <h2 >DETALII EVENIMENT </h2>
                <h3>SAMBATA</h3>
                <h3>28 SEPT 2024</h3>
                <h3>17:00</h3>
                <h3>
                    <a
                        target='_blank'
                        href='https://www.google.com/maps/place/Cioc%C3%A2rlia/@47.0822047,28.8278019,15z/data=!4m9!3m8!1s0x40c97d59eb45b0f9:0xa843cf2f07ee5066!5m2!4m1!1i2!8m2!3d47.0822047!4d28.8278019!16s%2Fg%2F11gbkw4d16?entry=ttu'
                    >Сomplex de agrement Ciocârlia</a>
                </h3>

            </div>
            <BackgroundImage image={cover} >
                <h1 className={`${monsieur.className} ${styles['heading--small']}`}>Vasile Maria</h1>
            </BackgroundImage>
        </div>
    </section>
}