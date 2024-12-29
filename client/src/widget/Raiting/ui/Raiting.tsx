
interface RaitingProps {
    text: string | number | undefined
}
const Raiting = (props: RaitingProps) => {
    const { text } = props

    if(!text){
        return null
    }
    const colors = {
        1: "bg-red-600",
        2: "bg-red-500",
        3: "bg-yellow-500",
        4: "bg-yellow-600",
        5: "bg-yellow-600",
        6: "bg-green-500",
        7: "bg-green-500",
        8: "bg-green-600",
        9: "bg-green-700",
        10: "bg-green-800",
    }

    let setColor;
    if(text in colors){
        setColor = colors[text as keyof typeof colors]
    }
    
    return (
        <span className={`${setColor} text-white px-1 py-0.5 mr-2 rounded-sm font-semibold`}>{text}</span>
    )
}


export default Raiting;