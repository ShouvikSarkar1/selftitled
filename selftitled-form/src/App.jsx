import { useState } from 'react'
import './App.css'
import Title from './components/Title/Title'
import Form from './components/Form/Form'

function App() {
  return (
    <>
    <div className='title'>
      <Title/>
    </div>
    <div className='form'> 
      <Form/>
    </div>   
    </>
  )
}

export default App
