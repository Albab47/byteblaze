import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero min-h-screen -mt-14">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-6xl font-extrabold">Welcome to <span className="bg-300% font-bold bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
          <p className="py-6">
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>
          {/* hero buttons */}
          <div className="flex gap-4 justify-center">
            <Button path="/blogs" btnText="Read Blogs" />
            <Button path="/bookmarks" btnText="Bookmarks" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
