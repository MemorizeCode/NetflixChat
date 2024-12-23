import createSlice from "./createSlice.js";

const layer = process.argv[2];
const nameSlice = process.argv[3];

const layersList = ['entities', 'features', 'pages', 'e' , 'f', 'p']

if(!layersList.includes(layer)) {
    throw new Error(`Укажите один из слоев: ${layersList} `)
}

if(!nameSlice){
    throw new Error(`Укаaжите название slice `)
}


createSlice(layer, nameSlice)