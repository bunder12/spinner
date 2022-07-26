import React from 'react'
import Spinner from './components/spinner/spinner'
import Input from './components/input/input'
import './App.css'

const App = () => {
  return (
    <>
    <div className='container'>
      <Spinner/>
      <Input/>
    </div>
    </>
  )
}

export default App