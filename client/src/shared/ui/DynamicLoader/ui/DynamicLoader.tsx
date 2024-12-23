import { ReduxManagerTypes, StateScema, StateSchemaKey } from "@/app/providers/store/config/StateSchema";
import { ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { Reducer } from "redux";

interface DynamicLoaderProps {
    initialReducers: ReducersList,
    children: ReactNode
    unmount?: boolean
}

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateScema[name]>>;
  };

const DynamicLoader = ({initialReducers, children, unmount}:DynamicLoaderProps) => {

    const store = useStore() as ReduxManagerTypes

    useEffect(()=>{
        Object.entries(initialReducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer)
        })

        return () => {
            if(unmount){
                Object.entries(initialReducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                })
            }
        }
    },[])
   
    return children;
}
 
export default DynamicLoader;