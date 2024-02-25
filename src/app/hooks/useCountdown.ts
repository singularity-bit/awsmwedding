'use client'
import { useEffect, useState } from "react";
export default function useCountdown() {

    const calculateTimeLeft = () => {

        const difference = +new Date('September 28, 2024 17:00:00:000') - +new Date()
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return undefined;
    };
    const [timeLeft, setTimeLeft] = useState<{
        days: number,
        hours: number,
        minutes: number,
        seconds: number
    } | undefined>(calculateTimeLeft());

    useEffect(() => {
        const timer1 = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);

        return () => {
            clearTimeout(timer1);
        };
    });
    return timeLeft
}