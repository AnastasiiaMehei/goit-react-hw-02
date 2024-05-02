import css from './Options.module.css';

const Options = ({ setValues, resetFeedbacks }) => {
    const handleButtonClick = (feedbackType) => {
        setValues(feedbackType);
    }

    return (
        <div>
            <button className={css.button} onClick={() => handleButtonClick('good')}>Good</button>            
            <button className={css.button} onClick={() => handleButtonClick('neutral')}>Neutral</button>            
            <button className={css.button} onClick={() => handleButtonClick('bad')}>Bad</button>            
            <button className={css.button} onClick={resetFeedbacks}>Reset</button>  
        </div>
    );
}

export default Options;