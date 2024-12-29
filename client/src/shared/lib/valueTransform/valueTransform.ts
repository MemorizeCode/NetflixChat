export function valueTransform(number: number | undefined):string {
    if(!number) return ""
    const hours = Math.floor(number / 60);
    const minutes = number % 60;

    const hoursStr = hours == 1 ? 'час' : hours >= 2 && hours <= 5 ? 'часа' : 'часов';
    const minutesStr = minutes == 1 ? 'минута' :  minutes >= 2 && minutes <= 4 ? 'минуты' : 'минут';

    let result = ""

    if(hours > 0){
        result+= `${hours} ${hoursStr} `
    }
    return `${result}${minutes} ${minutesStr}`
    
}