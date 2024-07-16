import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../../css/app.scss";

interface BlogPost {
  title: string;
  author: string;
  content: string;
  date: string;
  imageUrl?: string;
  program?: string;
}

interface FormData {
  title: string;
  author: string;
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
      <p className="text-sm ml-1 text-gray-500">{blogPost.date}</p>
      {renderContent()}
    </div>
  );
};

const BlogPostComponent: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      title: "Giảm giá nhiều dịch vụ khuyến mãi cho Tân Sinh Viên",
      author: "Admin",
      content:
        "Mắt Trí Anh mang đến nhiều ưu đãi hấp dẫn cho tân sinh viên. Đừng bỏ lỡ cơ hội nhận giảm giá đặc biệt cho các dịch vụ chăm sóc sức khỏe mắt, kiểm tra thị lực, và các gói kính cận thời trang. Chương trình khuyến mãi này giúp bạn bắt đầu năm học mới với một diện mạo tươi mới và tự tin hơn. Hãy đến ngay để trải nghiệm và tận hưởng những ưu đãi tuyệt vời chỉ dành riêng cho tân sinh viên!",
      date: "2024-07-01",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5fe22d28387101097e5d94e2/1609295335452-5BM1QMGHYWJEZBWGBUNO/Laser+Eye+Surgeon+New+York+City.jpg",
      program: "Khuyến mãi",
    },
    {
      title: "Khám toàn diện cho mắt chỉ từ 500.000đ",
      author: "Admin",
      content:
        "Mắt Trí Anh đang có chương trình giảm giá đặc biệt cho dịch vụ Khám mắt toàn diện chỉ từ 500.000vnd. Chương trình áp dụng từ ngày 10/12/2023 đến 1/1/2024. Đây là cơ hội tuyệt vời để bạn kiểm tra và chăm sóc sức khỏe mắt một cách toàn diện với chi phí tiết kiệm. Đội ngũ bác sĩ chuyên khoa giàu kinh nghiệm và trang thiết bị hiện đại sẽ mang đến cho bạn sự an tâm và hài lòng. Hãy nhanh tay đặt lịch hẹn ngay hôm nay để không bỏ lỡ cơ hội chăm sóc đôi mắt khỏe đẹp!",
      date: "2024-07-02",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixVDVsZ5JW0nxYx3eMRDep06S0RQyT8UB3cgJ2n-mVXxSbq6khv_4EpwRZUCf5PrtB0w&usqp=CAU ",
      program: "Khuyến mãi",
    },
    {
      title: "Cách chăm sóc mắt sau khi mổ cận thị",
      author: "Admin",
      content:
        "Sau khi phẫu thuật mắt (như Relex Smile, Lasik, hoặc FemtoLasik), các triệu chứng như cộm mắt và chảy nước mắt sẽ giảm dần sau 4-6 giờ. Để bảo vệ và chăm sóc mắt hiệu quả, quý vị cần đeo kính bảo vệ và nghỉ ngơi khoảng 1 giờ tại bệnh viện trước khi ra về. Trong ngày đầu tiên sau phẫu thuật (1 ngày cho Relex Smile và 3 ngày cho các phương pháp khác), hãy duy trì việc đeo kính bảo vệ suốt 24 giờ và hạn chế ra ngoài nắng nếu không cần thiết. Hạn chế nheo mắt và day dụi vào mắt, sử dụng nước mắt nhân tạo khi cần thiết, và vệ sinh mắt hàng ngày bằng NaCl 0.9% và gạc vô khuẩn. Luôn tuân thủ hướng dẫn của bác sĩ về việc sử dụng thuốc và không dùng chung thuốc với người khác.",
      date: "2024-07-03",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXROI_sgpRmKyyxIBHdtkVJpiyJfGTF738Q&s",
      program: "Lời khuyên chuyên gia",
    },
    {
      title: "Chăm sóc cho mắt khô",
      author: "Admin",
      content:
        "Để có đôi mắt khỏe mạnh và sáng đẹp, chúng ta cần chú ý đến một số điều quan trọng. Đầu tiên, đeo kính mắt để bảo vệ khỏi ánh nắng mặt trời, gió và bụi. Tránh dụi mắt và không để các luồng gió thổi trực tiếp vào mắt. Khi làm việc với sách và màn hình máy tính, hãy giữ khoảng cách từ 30 đến 45 cm và đảm bảo có đủ ánh sáng. Bổ sung dinh dưỡng đầy đủ bằng cách ăn rau xanh, cà rốt và các thực phẩm giàu vitamin A, cùng với việc uống đủ nước và trà xanh. Để không khí trong nhà ẩm mát bằng cách vệ sinh thường xuyên và trồng cây xanh. Nếu làm việc hoặc học tập nhiều giờ liền, hãy nghỉ ngơi cho mắt thường xuyên và sử dụng thuốc nhỏ mắt khi cần. Tránh tiếp xúc với khói thuốc lá để bảo vệ mắt và duy trì sức khỏe tổng thể. Những thói quen này sẽ giúp bạn duy trì đôi mắt khỏe mạnh và sáng đẹp suốt cả cuộc đời.",
      date: "2024-07-04",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSC-00eJTTUyvcmLg-jQUG5rMIRV4APknEKA&s",
      program: "Lời khuyên chuyên gia",
    },
  ]);

  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    if (filter === "latest") {
      const sorted = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setFilteredPosts(sorted);
    } else if (filter === "all") {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter((post) => post.program === filter);
      setFilteredPosts(filtered);
    }
  }, [filter, blogPosts]);

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
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(URL.createObjectURL(file));
      }, 1000);
    });
  };

  const programs = Array.from(
    new Set(blogPosts.map((post) => post.program))
  ).filter(Boolean);

  return (
    <div className="max-w-md mt-6 mx-auto bg-white space-y-4">
      {/*
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input
            className="border"
            {...register("title", { required: true })}
          />
        </div>
        <div>
          <label>Author</label>
          <input
            className="border"
            {...register("author", { required: true })}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            className="border"
            {...register("content", { required: true })}
          />
        </div>
        <div>
          <label>Image</label>
          <input type="file" {...register("imageUrl")} />
        </div>
        <div>
          <label>Program</label>
          <input className="border" {...register("program")} />
        </div>
        <button type="submit">Submit</button>
      </form>
 */}
      <div>
        <div className="flex items-center w-full">
          <h3 className="text-lg font-medium mr-4">Tin tức:</h3>
          <div className="mb-4">
            <select
              className="w-full border border-gray-300 p-2 mt-3 rounded"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Tất cả</option>
              <option value="latest">Tin mới nhất</option>
              {programs.map((program, index) => (
                <option key={index} value={program}>
                  {program}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="space-y-4">
          {filteredPosts.map((blogPost, index) => (
            <BlogPostCardComponent key={index} blogPost={blogPost} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostComponent;
