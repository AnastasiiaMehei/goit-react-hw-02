import Notification from '../Notification/Notification'
import css from './Feedback.module.css'
export default function Feedback({good, neutral, bad, totalFeedback, positiveFeedbacks}){
    return (
        <div>
            {totalFeedback > 0? (
                <div className={css.div}>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {totalFeedback}</p>
                    <p>Positive: {positiveFeedbacks}%</p>
                </div>
            ) : (
                <Notification/>
            )}
        </div>
    );
}