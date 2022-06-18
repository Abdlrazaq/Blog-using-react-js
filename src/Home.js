import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
 const {data: blogs, isLooding, error} = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      {isLooding && <div>Looding...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
