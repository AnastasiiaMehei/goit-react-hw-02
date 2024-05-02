// import { useState } from 'react'
// import {setValues} from '../App/App'
import css from './Options.module.css'
    const Options = ({handleButtonClick, resetFeedbacks}) => {
        // const handleButtonClick = (feedbackType) => {
        //     props.setValue(feedbackType);
        //  }
        //   const resetFeedbacks = () => {
        //     setValues([]);
        //   };
    return (
        <div>
            <button className={css.button} onClick={() => handleButtonClick('good')}>Good</button>            
            <button className={css.button} onClick={() => handleButtonClick('neutral')}>Neitral</button>            
            <button className={css.button} onClick={() => handleButtonClick('bad')}>Bad</button>            
            <button className={css.button} onClick={resetFeedbacks}>Reset</button>  

        </div>
    )
}

export default Options
