import Notification from '../Notification/Notification'
import css from './Feedback.module.css'
export default function Feedback({values, totalFeedback, positiveFeedbacks}){
    return (
        <div>
            {totalFeedback > 0? (
                <div className={css.div}>
                    <p>Good: {values.good}</p>
                    <p>Neutral: {values.neutral}</p>
                    <p>Bad: {values.bad}</p>
                    <p>Total: {totalFeedback}</p>
                    <p>Positive: {positiveFeedbacks}%</p>
                </div>
            ) : (
                <Notification/>
            )}
        </div>
    );}