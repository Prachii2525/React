import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setIsCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator =useCallback(() => {
  let pass = ""
  },
    [length,numberAllowed,charAllowed,setPassword])


    
  
      const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const digitChars = '0123456789';
      const specialChars = '!@#$%^&*()_+';
  

  return (
    <>
      <h1>
 
      </h1>
    </>

  )
}

export default App
