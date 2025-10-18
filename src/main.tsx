import {createContext, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthStore from "./store/AuthStore.ts";

interface State{
    store: {
        AuthStore: AuthStore,
    }
}

export const store = {
    AuthStore: new AuthStore()
}

export const Context = createContext<State>({
    store,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Context value={{store}}>
          <App />
      </Context>
  </StrictMode>,
)
