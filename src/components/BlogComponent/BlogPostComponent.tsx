import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import BlogPostCardComponent from "./BlogPostCardComponent";
import "../../css/app.scss";

interface BlogPost {
  title: string;
  author: string;
  content: string;
  date: string;
  imageUrl?: string;
}

interface FormData {
  title: string;
  author: string;
  content: string;
  imageUrl?: FileList;
}

const BlogPostComponent: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      title: "First Blog Post",
      author: "John Doe",
      content: "This is the content of the first blog post.",
      date: "2024-07-01",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      title: "Second Blog Post",
      author: "Jane Smith",
      content: "This is the content of the second blog post.",
      date: "2024-07-02",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      title: "Second Blog Post",
      author: "Jane Smith",
      content: "This is the content of the second blog post.",
      date: "2024-07-02",
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      title: "Second Blog Post",
      author: "Jane Smith",
      content: "This is the content of the second blog post.",
      date: "2024-07-02",
      imageUrl: "https://via.placeholder.com/400",
    },
  ]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const newBlogPost: BlogPost = {
      ...data,
      date: new Date().toISOString().split("T")[0],
      imageUrl: data.imageUrl
        ? await handleImageUpload(data.imageUrl[0])
        : undefined,
    };
    setBlogPosts([...blogPosts, newBlogPost]);
    reset();
  };

  const handleImageUpload = async (file: File): Promise<string> => {
    // Simulate an image upload by returning a placeholder image URL after a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(URL.createObjectURL(file));
      }, 1000);
    });
  };

  return (
    <div className=" max-w-md mt-6 mx-auto bg-white  space-y-4">
      <div>
        <h3 className="text-lg font-medium">Tin tức:</h3>
        <div className="space-y-4">
          {blogPosts.map((blogPost, index) => (
            <BlogPostCardComponent key={index} blogPost={blogPost} />
          ))}
        </div>
      </div>
      {/* 
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title:</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            {...register("title", { required: true })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Author:</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            {...register("author", { required: true })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Content:</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            {...register("content", { required: true })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Image:</label>
          <input
            type="file"
            className="w-full border border-gray-300 p-2 rounded"
            {...register("imageUrl")}
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

export default BlogPostComponent;
