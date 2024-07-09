import React from "react";
import SingleFeedback from "./singlefeed"; // Adjust the path as needed

// Sample feedback data
const feedbackData = [
  {
    name: "John Doe",
    comment: "Great service, highly recommended!",
    img: "https://example.com/avatar1.png",
    rating: 4.5,
  },
  {
    name: "Jane Smith",
    comment: "Excellent support and fast response.",
    img: "https://example.com/avatar2.png",
    rating: 5,
  },
  // Add more feedback objects as needed
];

const FeedbackList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {feedbackData.map((feedback, index) => (
        <SingleFeedback
          key={index} // Use a unique key for each item in the list
          name={feedback.name}
          comment={feedback.comment}
          img={feedback.img}
          rating={feedback.rating}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
