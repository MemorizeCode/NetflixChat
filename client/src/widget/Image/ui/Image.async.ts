import { lazy } from "react";

export const ImageAsync = lazy(()=>new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(import("./Image"))
    },0)
}))