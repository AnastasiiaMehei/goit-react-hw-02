import { useState } from 'react'
import './App.module.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  return (
    <>
     <Description />
     <Options values={values} />
     <Feedback updateFeedback={setValues} />
     
    </>
  )
}