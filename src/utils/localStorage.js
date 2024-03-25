import toast from "react-hot-toast";

// get
const getStoredBlogs = () => {
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    return JSON.parse(storedBlogs);
  }
  return [];
};

// save 
const saveBlog = (blog) => {
  const storedBlogs = getStoredBlogs();
  const isExist = storedBlogs.find((b) => b.id === blog.id);
  if (isExist) {
    return toast.error("bookmark already added!");
  }
  storedBlogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(storedBlogs));
  toast.success("Bookmark added successfully");
};

// delete
const deleteBlog = (id) => {
  let storedBlogs = getStoredBlogs();
  const remaining = storedBlogs.filter((b) => b.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remaining));
  toast.success("Bookmark removed successfully");
};

export { getStoredBlogs, saveBlog, deleteBlog };
