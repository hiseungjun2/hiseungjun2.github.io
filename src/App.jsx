import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-base-200">
          <h1 className="text-4xl font-bold mb-8">daisyUI 적용 테스트</h1>
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary mt-4">Secondary Button</button>
      </div>
  )
}

export default App
