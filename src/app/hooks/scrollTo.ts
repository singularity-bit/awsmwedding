import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

export function useScrollToPage(container: any, pageNr: number) {
    const { contextSafe } = useGSAP({ scope: container?.current });

    const onClickHandler = contextSafe((e: any) => {
        if (e) {
            e.preventDefault();
            gsap.to(window, {
                scrollTo: 400 * pageNr
            });
        }
    });
    return onClickHandler
}