import { Link, Outlet, useLoaderData } from "react-router-dom";
import { BookmarkIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlog } from "../utils/localStorage";

const Blog = () => {
  const blog = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);

  const {
    title,
    comments_count,
    published_at,
    public_reactions_count,
    reading_time_minutes,
  } = blog;

  const handleBookmark = (blog) => {
    saveBlog(blog);
  }

  return (
    <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600">
            <p className="text-sm">
              {reading_time_minutes} min •{" "}
              {new Date(published_at).toLocaleDateString()}
            </p>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} comments • {public_reactions_count} views
            </p>
          </div>

          {/* tabs */}
          <div role="tablist" className="tabs flex items-center tabs-lifted tabs-lg max-w-xs">
            <Link
              to=""
              onClick={() => setTabIndex(0)}
              role="tab"
              className={`tab ${tabIndex === 0 && "tab-active"}`}
            >
              <BookmarkIcon className="size-4 mr-2" /> Content
            </Link>
            <Link
              to="author"
              onClick={() => setTabIndex(1)}
              role="tab"
              className={`tab ${tabIndex === 1 && "tab-active"}`}
            >
              <BookOpenIcon className="size-4 mr-2" /> Author
            </Link>

            {/* bookmark btn */}
            <div onClick={() => handleBookmark(blog)} className="ml-4 bg-secondary rounded-full p-2 bg-opacity-20 hover:scale-105 hover:bg-opacity-30 cursor-pointer ">
              <MdBookmarkAdd size="25" className="text-secondary" />
            </div>
          </div>
        </div>

        <div className="text-gray-800">
          <Outlet />
        </div>
      </article>
    </div>
  );
};

export default Blog;
