'use client'
import useCountdown from "../hooks/useCountdown";

export default function CountDown() {
    const timer = useCountdown()
    return timer ? <h3>days :{timer.days} , hours :{timer.hours} ,minutes : {timer.minutes},seconds : {timer.seconds}</h3> : <h3>woops, it's gone </h3>
}