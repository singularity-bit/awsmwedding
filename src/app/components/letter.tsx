"use client"
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import letter from '../../../public/letter2.jpg'
import label1 from '../../../public/Label 1.png'
import label2 from '../../../public/Label 2.png'
import flowers from '../../../public/flower-float.png'
import letterStyles from './letter.module.css'
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const FLOWER_SPEED_X = 0.007
const FLOWER_SPEED_Y = 0.007

const LABEL1_SPEED_X = 0.02
const LABEL1_SPEED_Y = 0.02

const LABEL2_SPEED_X = 0.04
const LABEL2_SPEED_Y = 0.04


gsap.registerPlugin(ScrollTrigger)

export default function Letter() {
    const [clientMouse, setClientMouse] = useState({
        x: 0,
        y: 0,
    })
    const [isFlowerDone, setFlowerDone] = useState(false)
    const [isLabel1Done, setLabel1Done] = useState(false)
    const [isLabel2Done, setLabel2Done] = useState(false)
    const flowerRef = useRef<HTMLImageElement>(null)
    const letter1Ref = useRef<HTMLImageElement>(null)
    const letter2Ref = useRef<HTMLImageElement>(null)

    useGSAP(() => {
        gsap.timeline().from(flowerRef.current, {
            yPercent: -100,
            duration: 3.5,
            ease: 'power3.out',
            opacity: 0,
            scrollTrigger: {
                trigger: `#invitation`,
                scrub: true

            },
            onComplete: () => setFlowerDone(true),
        })
        gsap.timeline().from(letter1Ref.current, {
            xPercent: 30,
            duration: 3.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: `#invitation`,
                scrub: true

            },
            onComplete: () => setLabel1Done(true)
        })
        gsap.timeline().from(letter2Ref.current, {
            xPercent: 30,
            yPercent: 30,
            duration: 3.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: `#invitation`,
                scrub: true


            },
            onComplete: () => setLabel2Done(true)

        })




    }, []);
    const hanldeMouseMove = (e: MouseEvent) => {
        isFlowerDone && isLabel1Done && isLabel2Done && setClientMouse({
            x: e.clientX - window.innerWidth / 2,
            y: e.clientY - window.innerHeight / 2,
        })
    }
    const handleTranslate = (
        clientX: number,
        clientY: number,
        speedX: number,
        speedY: number) => `translateX(calc(-50% + ${-clientX * speedX}px)) translateY(calc(-50% + ${clientY * speedY}px))`

    return <div id="invitation" className={letterStyles.wrapper} onMouseMove={hanldeMouseMove}>
        <Image
            src={letter}
            alt="Picture of the author"
            quality={100}
            fill
            style={{
                objectFit: 'cover',
            }}
            className={`${letterStyles['image-element']} ${letterStyles.background}`}
        />
        <Image
            ref={flowerRef}
            src={flowers}
            alt="Picture of the author"
            quality={100}
            style={{
                transform: handleTranslate(clientMouse.x, clientMouse.y, FLOWER_SPEED_X, FLOWER_SPEED_Y)
            }}
            className={`${letterStyles['image-element']} ${letterStyles.parallax} ${letterStyles.flowers}`}
        />
        <Image
            src={label1}
            ref={letter1Ref}
            alt="Picture of the author"
            quality={100}
            style={{
                transform: handleTranslate(clientMouse.x, clientMouse.y, LABEL1_SPEED_X, LABEL1_SPEED_Y)
            }}
            className={`${letterStyles['image-element']} ${letterStyles.parallax} ${letterStyles.label1}`}
        />
        <Image
            src={label2}
            ref={letter2Ref}
            alt="Picture of the author"
            quality={100}
            style={{
                transform: handleTranslate(clientMouse.x, clientMouse.y, LABEL2_SPEED_X, LABEL2_SPEED_Y)
            }}
            className={`${letterStyles['image-element']} ${letterStyles.parallax} ${letterStyles.label2}`}
        />
        <h1 className={letterStyles.text}>welcome</h1>
        <a href="#homepage" className={letterStyles.navigation}> back to top</a>
    </div>
}