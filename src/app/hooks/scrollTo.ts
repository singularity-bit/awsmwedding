import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

export function useScrollToPage(container, pageNr: number) {
    const { contextSafe } = useGSAP({ scope: container?.current });

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