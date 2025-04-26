import css from './Feedback.module.css';

function Feedback({ nameValue, totalFeedback, positiveFeedback }) {
  const { good, neutral, bad } = nameValue;

  return (
    <div className={css.feedback}>
      <p className={css.feedbackItem}>Good: {good}</p>
      <p className={css.feedbackItem}>Neynral: {neutral}</p>
      <p className={css.feedbackItem}>Bad: {bad}</p>
      <p className={css.feedbackItem}>Total: {totalFeedback}</p>
      <p className={css.feedbackItem}>Positive: {positiveFeedback}</p>
    </div>
  );
}
export default Feedback;
