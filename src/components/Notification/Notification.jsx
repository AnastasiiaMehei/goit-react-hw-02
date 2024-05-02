export default function Notification({ good, neutral, bad }) {
    if (good === 0 && neutral === 0 && bad === 0) {
        return <p>No feedback given</p>;
    }
}