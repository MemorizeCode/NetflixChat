import { lazy } from 'react';


export const CurrentMovieAsync = lazy(()=>new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(import('./CurrentMovie'))
    },1000)
}))