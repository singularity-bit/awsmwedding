import FirstPage from "./first";
import FourthPage from "./fourth";
import SecondPage from "./second";
import ThirdPage from "./third";
import styles from './styles.module.css'
import { Invitation } from "../lib/invitations";
export default function Carousel({ data }: { data: Invitation }) {
    const names = data?.persons?.map(person => person.name)?.toString()

    return <div className={styles.container} >
        <FirstPage />
        <SecondPage names={names} />
        <ThirdPage />
        <FourthPage data={data} />
    </div>
}