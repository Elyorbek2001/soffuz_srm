import { useState } from 'react'

import './App.css'
import Home from './companents/Home/Home'
import Draft from './companents/Draft/Draft'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>




    </>
  )
}

export default App
