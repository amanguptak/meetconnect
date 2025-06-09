import { mmkvStorage } from "./storage";

import {create} from "zustand"
import {createJSONStorage, persist} from "zustand/middleware"


export const useUserStore = create()(
    persist(
        (set,get)=>({}),
        {
            name:'live-meet-storage',
            storage:createJSONStorage(()=>mmkvStorage)
        }
    )
)