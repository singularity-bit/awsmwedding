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
                sizes="100vw"
                fill
                style={{
                    padding: '1rem 1rem 4rem 1rem',
                    objectFit: 'cover',
                }}

            />
            <div className={styles.caption}>{children}</div>
        </div>
    )
}
