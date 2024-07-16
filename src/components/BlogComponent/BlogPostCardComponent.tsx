import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../../css/app.scss";

interface BlogPost {
  title: string;

  content: string;
  date: string;
  imageUrl?: string;
  program?: string;
}

interface FormData {
  title: string;

  content: string;
  imageUrl?: FileList;
  program?: string;
}

interface BlogPostCardComponentProps {
  blogPost: BlogPost;
}

const BlogPostCardComponent: React.FC<BlogPostCardComponentProps> = ({
  blogPost,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const renderContent = () => {
    if (blogPost.content.length <= maxLength) {
      return <p className="text-gray-700 ml-1 text-sm">{blogPost.content}</p>;
    }

    if (isExpanded) {
      return (
        <>
          <p className="text-gray-700 ml-1 text-sm">{blogPost.content}</p>
          <button
            onClick={toggleContent}
            className="text-blue-500 text-sm ml-1 mt-2"
          >
            Ẩn bớt
          </button>
        </>
      );
    }

    return (
      <>
        <p className="text-gray-700 ml-1 text-sm">
          {blogPost.content.slice(0, maxLength)}...
        </p>
        <button
          onClick={toggleContent}
          className="text-blue-500 text-sm ml-1 mt-2"
        >
          Xem thêm
        </button>
      </>
    );
  };

  return (
    <div className="p-2 border border-gray-200 rounded-md shadow-sm space-y-2">
      {blogPost.imageUrl && (
        <img
          src={blogPost.imageUrl}
          alt="Blog"
          className="w-full h-48 object-cover rounded-md"
        />
      )}
      <h2 className="text-lg ml-1 font-bold">{blogPost.title}</h2>
      <p className="text-sm ml-1 text-gray-500">Ngày đăng:{blogPost.date}</p>
      {renderContent()}
    </div>
  );
};

const BlogPostComponent: React.FC = () => {};

export default BlogPostComponent;
