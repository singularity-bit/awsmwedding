import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"
import styles from '../../../components/styles.module.css'
export default function Loading() {
    return <section className={styles.wrapper}>
        <h1 > Pregătim masa mare < FontAwesomeIcon icon={faSpinner} size="sm" spin height={50} width={50}></FontAwesomeIcon> </h1>
    </section>
}