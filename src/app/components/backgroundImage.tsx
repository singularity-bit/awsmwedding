import Image, { StaticImageData } from "next/image";
import styles from './styles.module.css'


export default function BackgroundImage({
    image,
    overlay = false,
    children,
}: Readonly<{
    overlay?: boolean
    image: StaticImageData,
    children?: React.ReactNode;
}>) {
    return (
        <div className={styles.imageWrapper}>
            {overlay && <div className={styles.imageOverlay}></div>}
            <Image
                alt="maria&vasile"
                src={image}
                placeholder="blur"
                quality={100}
                fill
                style={{
                    objectFit: 'cover'

                }}

            />
            {children}
        </div>
    )
}
