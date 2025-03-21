import React from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "./blogData";

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  let blog;
  if(id){
    blog = blogsData.find((blog) => blog.id === parseInt(id));
  }

  if (!blog) {
    return <div>Blog post not found!</div>;
  }

  return (
    <div className="container mx-auto px-6 mt-9 font-inter">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          {blog.title}
        </h1>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-700 mb-4">{blog.description}</p>
        <p className="text-sm text-gray-500 mb-6">{blog.date}</p>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default BlogPost;