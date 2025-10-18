import {createContext, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthStore from "./store/AuthStore.ts";
import { BrowserRouter } from 'react-router-dom';

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
    <BrowserRouter>
      <Context value={{store}}>
          <App />
      </Context>
    </BrowserRouter>
  </StrictMode>,
)
