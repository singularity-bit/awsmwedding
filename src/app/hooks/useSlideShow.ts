import gsap from 'gsap';

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { RefObject } from 'react';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function useSlideshow<T>(scopeContainer: RefObject<T>, targetContainer: string) {
    useGSAP(() => {
        let panels = gsap.utils.toArray(targetContainer)
        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                //@ts-ignore
                trigger: scopeContainer.current,
                pin: true,
                scrub: 1,
                snap: 1 / (panels.length - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: "+=1500",
            }
        });

    }, { scope: scopeContainer });
}