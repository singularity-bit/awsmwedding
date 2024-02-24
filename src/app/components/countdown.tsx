'use client'
import useCountdown from "../hooks/useCountdown";

export default function CountDown() {
    const timer = useCountdown()
    return timer ? <p>{timer.days} zile, {timer.hours} ore</p> : <p>woops, its gone </p>
}