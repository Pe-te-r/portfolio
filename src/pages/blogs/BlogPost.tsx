import React from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "./blogData";

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogsData.find((blog) => blog.id === parseInt(id!));

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="container mx-auto px-6 mt-9 font-inter">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
        {blog.title}
      </h1>
      <div className="prose max-w-4xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default BlogPost;