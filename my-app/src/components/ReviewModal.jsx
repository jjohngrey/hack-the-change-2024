// components/ReviewModal.js
import React, { useState } from 'react';

const ReviewModal = ({ isOpen, onClose }) => {
  const [review, setReview] = useState('');
  const [accessibilityFeatures, setAccessibilityFeatures] = useState([]);

  const handleReviewSubmit = () => {
    // Handle review submission logic, perhaps to a database or API
    console.log(`Review: ${review}`);
    console.log(`Accessibility Features: ${accessibilityFeatures}`);
    onClose();
  };

  return (
    isOpen && (
      <div className="modal">
        <h2>Submit a Review</h2>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Write your review here..." />
        <div className="features-checkboxes">
          <label>
            <input type="checkbox" onChange={() => setAccessibilityFeatures([...accessibilityFeatures, 'Wheelchair Accessible'])} />
            Wheelchair Accessible
          </label>
          <label>
            <input type="checkbox" onChange={() => setAccessibilityFeatures([...accessibilityFeatures, 'Braille Available'])} />
            Braille Available
          </label>
          {/* More checkboxes for different features */}
        </div>
        <button onClick={handleReviewSubmit}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    )
  );
};

export default ReviewModal;
