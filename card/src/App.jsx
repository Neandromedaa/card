import { useState } from 'react';
import CardInput from './components/CardInput';
import './App.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CardInput/>
      </div>
    </>
  )
}

export default App
