import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MenuBar from './components/MenuBar';
import Dashboard from './components/Dashboard';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MenuBar/>
      <Dashboard/>
    </div>
  )
}

export default App
