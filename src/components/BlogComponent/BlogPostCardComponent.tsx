import React from "react";
import "../../css/app.scss";

interface BlogPost {
  title: string;
  author: string;
  content: string;
  date: string;
  imageUrl?: string;
}

interface BlogPostCardComponentProps {
  blogPost: BlogPost;
}

const BlogPostCardComponent: React.FC<BlogPostCardComponentProps> = ({
  blogPost,
}) => {
  return (
    <div className="p-2 border border-gray-200 rounded-md shadow-sm space-y-2">
      {blogPost.imageUrl && (
        <img
          src={blogPost.imageUrl}
          alt="Blog"
          className="w-full h-48 object-cover rounded-md"
        />
      )}
      <h2 className="text-lg ml-3 font-bold">{blogPost.title}</h2>
      <p className="text-sm ml-1 text-gray-500">
        {blogPost.author} - {blogPost.date}
      </p>
      <p className="text-gray-700 ml-1 text-sm">{blogPost.content}</p>
    </div>
  );
};

export default BlogPostCardComponent;
