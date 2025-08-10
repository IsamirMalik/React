import { useState } from 'react';
import FormInput from './components/FormInput';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FormInput />
      </div>
    </>
  )
}

export default App;
