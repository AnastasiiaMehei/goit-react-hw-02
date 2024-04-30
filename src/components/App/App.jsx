import { useState } from 'react'
import './App.module.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import feedbacks from '../../data/feedbacks.json'

function App() {
  return (
    <>
     <Description />
     <Options />
     <Feedback feedbacks={feedbacks}/>
     
    </>
  )
}

export default App
