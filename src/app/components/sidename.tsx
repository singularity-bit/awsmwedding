import { Cormorant_Garamond } from 'next/font/google';
import styles from './styles.module.css'
const garamond_light = Cormorant_Garamond({ subsets: ["latin"], weight: ['300'] });
export default function SideName() {
    return (
        <div className={styles.sidename}>
            <h4 className={garamond_light.className}>Grosu Vasile Maria</h4>
        </div>
    );
}
