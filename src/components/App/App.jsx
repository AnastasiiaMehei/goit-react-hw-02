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
  // const updateFeedback = (feedbackType) => {
  //   setValues(prevValues => ({
  //    ...prevValues,
  //     [feedbackType]: prevValues[feedbackType] + 1
  //   }));
  // };
  const handleButtonClick = (feedbackType) => {
    setValues(prevValues => ({
       ...prevValues,
        [feedbackType]: prevValues[feedbackType] + 1
    }));
};

const resetFeedbacks = () => {
    resetValues({
        good: 0,
        neutral: 0,
        bad: 0
    });
};
  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedbacks = totalFeedback > 0? Math.round((values.good / totalFeedback) * 100):0;


  
  return (
    <>
     <Description />
     <Options setValues={handleButtonClick} resetValues={resetFeedbacks}/>
     <Feedback values={values} totalFeedback={totalFeedback} positiveFeedbacks={positiveFeedbacks} />
     
    </>
  )
}