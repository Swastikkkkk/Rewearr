import React from 'react';

const FeedbackSummary = () => {
  const feedback = {
    positive: 84,
    neutral: 10,
    negative: 6,
  };

  return (
    <>
      <h2 className="text-xl font-semibold text-[#1a3d35] mb-4">User Feedback Summary</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-green-600 font-medium">Positive Feedback</span>
          <span>{feedback.positive}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-yellow-600 font-medium">Neutral Feedback</span>
          <span>{feedback.neutral}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-red-500 font-medium">Negative Feedback</span>
          <span>{feedback.negative}%</span>
        </div>
      </div>
    </>
  );
};

export default FeedbackSummary;
