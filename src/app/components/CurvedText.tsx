export default function CurvedText({ text = 'demo', arc = 120, radius = 400, reverseText, className }: {
    text: string,
    reverseText?: boolean
    arc?: number,
    radius?: number,
    className?: string
}) {
    const characters = text.split('')
    const degree = arc / characters.length
    const bendedText = characters.map((char, i) =>
        <span
            key={`text-span-${i}`}
            style={{
                height: `${radius}px`,
                transform: `rotate(${degree * i - arc / 2}deg)`,
                transformOrigin: `0 ${radius}px 0`,
                position: 'absolute'
            }}
        >
            {char}
        </span>)
    const reversedText = characters.reverse().map((char, i) =>
        <span
            key={`reverse-text-span-${i}`}
            style={{
                height: `${radius}px`,
                transform: `rotate(${degree * i - arc / 2}deg)`,
                transformOrigin: `0 ${radius}px 0`,
                position: 'absolute'
            }}
        >
            {char}
        </span>)
    return (
        <h2 className={className} style={{
            margin: 0,
            textAlign: 'center',
            position: 'relative',
            height: `1rem`,
            width: '80vw'
        }}>
            {reverseText ? reversedText : bendedText}
        </h2>
    )
}
