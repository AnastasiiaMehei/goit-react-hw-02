
import css from './Feedback.module.css'
// import App from '../App/App'
export default function Feedback({good, neutral, bad, totalFeedback, positiveFeedbacks}){

    return(
        <div className={css.div}>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive:{positiveFeedbacks}%</p>

        </div>
    )
}