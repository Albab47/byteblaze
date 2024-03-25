import { useLoaderData } from "react-router-dom";
import placeHolderImg from '../../assets/404.jpg';
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// eslint-disable-next-line react/prop-types
const BlogContent = () => {
  const blog = useLoaderData();
  const {id, cover_image, title, body_html, tags, url} = blog;

  return (
    <div
      rel="noopener noreferrer"
      className="mx-auto border-2 p-2 group"
    > 
      {/* cover img */}
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || placeHolderImg}
      />
      {/* tags */}
      <div>
        <div className="flex flex-wrap py-6 gap-2">
          {tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline text-gray-800"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>

      <div className="p-2 space-y-2">
        <a href={url} target="_blank" className="hover:underline text-2xl font-semibold">
          {title}
        </a>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default BlogContent;
