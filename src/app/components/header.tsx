import { Cormorant_Garamond } from 'next/font/google';
import styles from './styles.module.css'
const garamond = Cormorant_Garamond({ subsets: ["latin"], weight: ['700'], });
const garamond_light = Cormorant_Garamond({ subsets: ["latin"], weight: ['300'], });

export default function Header() {
    return (
        <div className={styles['header--wrapper']}>
            <h2 className={garamond.className}>awsm<span className={garamond_light.className}>wedding</span>.</h2>
        </div>
    );
}
