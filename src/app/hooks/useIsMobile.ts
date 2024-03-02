'use client'
import { useCallback, useEffect, useState } from "react";

export default function useIsMobile(width: number) {
    const [targetReached, setTargetReached] = useState(false);
    const [windowWidth, setWindowWidth] = useState(400);
    const updateTarget = useCallback((e: MediaQueryListEvent) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeListener(updateTarget);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return { isMobile: targetReached, width: windowWidth };
};