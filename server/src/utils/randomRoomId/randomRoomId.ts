export function randomRoomId(id: number | null): string | null {
    if(id){
        const randomStringLeft:string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const randomStringRight:string = Math.random().toString(36).substring(2,10) + Math.random().toString(36).substring(2,10)
        const randomRoom:string = `${randomStringLeft+id}${id+randomStringRight}_${id}`
        return randomRoom.split('').join('')
    }
    return null
}