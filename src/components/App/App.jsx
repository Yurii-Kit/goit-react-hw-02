import './App.css';
import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import { useState } from 'react';

function App() {
  const [respondType, setRespondType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const respondTypeName = Object.keys(respondType);

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

  return (
    <>
      <Description />
      <Options names={respondTypeName} onFeedback={updateFeedback} />
      {totalFeedback > 0 ? (
        <Feedback nameValue={respondType} />
      ) : (
        <p className="feedback">No feedback yet</p>
      )}
    </>
  );
}

export default App;
