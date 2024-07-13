import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import ReviewCardComponent from "./ReviewCardComponent";
import "../../css/app.scss";

interface Review {
  username: string;
  rating: number;
  comment: string;
}

interface FormData {
  rating: number;
  comment: string;
}

const ProductReviewComponent: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [reviews, setReviews] = useState<Review[]>([
    {
      username: "Nguyễn Văn Hoàng",
      rating: 5,
      comment: "Dịch vụ khám khá oke!",
    },
    {
      username: "Trần Thị Bích Vân",
      rating: 5,
      comment: "Rất tốt, Bác sĩ tận tình lắm luôn nha.",
    },
    {
      username: "Lê Văn Cao",
      rating: 4,
      comment: "Không tốn thời gian đợi",
    },
    {
      username: "Lê Văn Duy Việt",
      rating: 5,
      comment: "Dịch vụ ổn nha cả nhà",
    },
    {
      username: "Nguyên Phan Hồng Kim",
      rating: 5,
      comment: "Bác sĩ tận tình.",
    },
    {
      username: "Vũ thị Ánh",
      rating: 5,
      comment: "Dịch vụ khám chất lượng.",
    },
    {
      username: "Lê kim Bảo",
      rating: 5,
      comment: ".",
    },
    {
      username: "Lê Hoàn Phát Đạt",
      rating: 5,
      comment: "Cảm ơn bác sĩ và bệnh viện.",
    },
    {
      username: "Nguyễn Kim Hân",
      rating: 5,
      comment: "",
    },
  ]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newReview: Review = {
      ...data,
      username: "Người dùng mới",
    };
    setReviews([...reviews, newReview]);
    reset();
  };

  return (
    <div className="p-4 mt-3 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div>
        <h3 className="text-lg font-medium">Phản hồi khách hàng:</h3>
        <div className="disscorllbar flex overflow-x-auto">
          {reviews.map((review, index) => (
            <div className="ml-2" key={index}>
              <ReviewCardComponent review={review} />
            </div>
          ))}
        </div>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Rating:</label>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            {...register("rating", { required: true })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Comment:</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            {...register("comment", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Submit
        </button>
      </form>
      */}
    </div>
  );
};

export default ProductReviewComponent;
