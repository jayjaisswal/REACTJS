import { useEffect, useContext } from "react";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import "./App.css";
import { AppContext } from "./context/AppContext";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
