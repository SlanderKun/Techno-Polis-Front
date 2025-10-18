import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
=======
import reactLogo from './shared/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {observer} from "mobx-react-lite";
>>>>>>> 3c2e8c62648fb58f2886a33d928d826ba47c2acb

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default observer(App)
>>>>>>> 3c2e8c62648fb58f2886a33d928d826ba47c2acb
