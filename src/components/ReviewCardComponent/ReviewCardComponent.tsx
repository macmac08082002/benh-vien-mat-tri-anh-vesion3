import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import "../../css/app.scss";

interface Review {
  avatar: string;
  username: string;
  rating: number;
  comment: string;
}

interface ReviewCardComponentProps {
  review: Review;
}

const ReviewCardComponent: React.FC<ReviewCardComponentProps> = ({
  review,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="flex flex-col p-4 border border-gray-200 rounded-md shadow-sm space-y-2"
      style={{ width: "250px", height: "auto", margin: "0.5rem 0" }}
    >
      <div className="flex items-center space-x-3">
        <p className="font-bold text-sm">{review.username}</p>
      </div>
      <div className="flex items-center">
        <ReactStars
          count={5}
          size={14}
          value={review.rating}
          edit={false}
          activeColor="#ffd700"
        />
      </div>
      <p
        className={`text-gray-700 text-xs ${isExpanded ? "" : "line-clamp-3"}`}
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: isExpanded ? "none" : "3",
          overflow: "hidden",
        }}
      >
        {review.comment}
      </p>
      {review.comment.split(" ").length > 20 && (
        <button
          className="text-blue-500 text-xs mt-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Thu gọn" : "Xem thêm"}
        </button>
      )}
    </div>
  );
};

export default ReviewCardComponent;
