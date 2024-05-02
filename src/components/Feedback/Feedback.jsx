
import css from './Feedback.module.css'
// import App from '../App/App'
export default function Feedback({good, neutral, bad}){
    const totalFeedback = good + neutral + bad;

    return(
        <div className={css.div}>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total: {totalFeedback}</p>

        </div>
    )
}