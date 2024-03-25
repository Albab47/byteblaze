import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import { getStoredBlogs } from "../utils/localStorage";
import EmptyState from "../components/EmptyState/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getStoredBlogs();
    setBlogs(storedBlogs);
  }, []);

  if(blogs.length < 1) return <EmptyState address={'/blogs'} message={'No bookmarks found'} />;

  return (
    <div className="grid justify-center container max-w-6xl p-6 mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* card will render here */}
      {blogs.map((blog) => (
        <BlogCard setBlogs={setBlogs} deletable={true} key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Bookmarks;
