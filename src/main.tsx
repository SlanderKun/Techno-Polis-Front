import {createContext, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthStore from "./store/AuthStore.ts";
import {BrowserRouter} from "react-router-dom";
import InternshipStore from "./store/InternshipStore.ts";
import VacancyStore from "./store/VacancyStore.ts";

interface State{
    store: {
        AuthStore: AuthStore,
        InternshipStore: InternshipStore,
        VacancyStore: VacancyStore,
    }
}

export const store = {
    AuthStore: new AuthStore(),
    InternshipStore: new InternshipStore(),
    VacancyStore: new VacancyStore(),
}

export const Context = createContext<State>({
    store,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Context value={{store}}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Context>
  </StrictMode>,
)
