import { configureStore } from '@reduxjs/toolkit'
import {ReactNode} from 'react'
import { Provider as ReduxProvider } from 'react-redux'

const store = configureStore({
    reducer:{
        
    }
})

export const withStore = (component:()=>ReactNode)=>{
    return <ReduxProvider store={store}>
        {component()}
    </ReduxProvider>
}