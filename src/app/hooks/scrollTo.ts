import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { RefObject } from "react";
gsap.registerPlugin(ScrollToPlugin);

export function useScrollToPage<T>(container: RefObject<T>, pageNr: number) {
    const { contextSafe } = useGSAP({ scope: container });

    //@ts-ignore
    const onClickHandler = contextSafe((e) => {
        if (e) {
            e.preventDefault();
            gsap.to(window, {
                scrollTo: 400 * pageNr
            });
        }
    });
    return onClickHandler
}