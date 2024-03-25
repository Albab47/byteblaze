import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import placeHolderImg from "../../assets/404.jpg";
import { deleteBlog, getStoredBlogs } from "../../utils/localStorage";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ blog, deletable, setBlogs }) => {
  const { id, cover_image, title, description, published_at } = blog;

  const handleDelete = (id) => {
    deleteBlog(id)
    const storedBlogs = getStoredBlogs();
    setBlogs(storedBlogs)
  }

  return (
    <div className="relative flex">
      <Link
        rel="noopener noreferrer"
        to={`/blog/${id}`}
        className="max-w-sm mx-auto bg-base-100 transition border-2 border-primary hover:border-secondary hover:scale-105 border-opacity-30  group hover:no-underline focus:no-underline"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeHolderImg}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div onClick={() => handleDelete(id)} className="absolute right-0 -top-4 bg-primary hover:bg-secondary text-secondary hover:text-primary p-3 rounded-full hover:scale-110">
          <MdDeleteForever size={20} />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
