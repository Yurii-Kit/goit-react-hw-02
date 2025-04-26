import './App.css';
import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [respondType, setRespondType] = useState(() => {
    const savedRespondType = window.localStorage.getItem('feedback');
    if (savedRespondType !== null) {
      return JSON.parse(savedRespondType);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(respondType));
  }, [respondType]);

  const respondTypeNames = Object.keys(respondType);

  const updateFeedback = (feedbackType) => {
    setRespondType((State) => ({
      ...State,
      [feedbackType]: State[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(respondType).reduce(
    (acc, value) => acc + value,
    0,
  );
  const positiveFeedback = Math.round((respondType.good / totalFeedback) * 100);

  const resetRespondType = () => {
    setRespondType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        names={respondTypeNames}
        onFeedback={updateFeedback}
        clicks={totalFeedback}
        reset={resetRespondType}
      />
      {totalFeedback > 0 ? (
        <Feedback
          nameValue={respondType}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
