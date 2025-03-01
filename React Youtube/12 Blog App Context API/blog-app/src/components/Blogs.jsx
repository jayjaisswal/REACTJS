import { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
function Blogs() {
  // consume
  const {posts, loading} = useContext(AppContext);
  return (
    <div className="flex flex-col  w-11/12 max-w-[630px] mt-[80px]  mb-[90px] justify-center h-screen items-center">
      {loading ? (
        <Spinner />
      ) : posts.length == 0 ? (
        <div>
          <p>No posts found</p>
        </div>
      ) : (
        posts.map((post) =>(
            <div  key={post.id} >
                <p className="font-bold text-2xl mt-4">{post.title}</p>
                <p className="text-[12px]" >By <span className="italic">{post.author}</span> on <span className="font-bold underline ">{post.category}</span></p>
                <p className="text-[14px]">Posted on {post.date}</p>
                <p className="mt-3 text-justify ">{post.content}</p>
                <div className="flex gap-x-3 ">
                    {
                        post.tags.map((tag, index)=>(
                            <span className="text-blue-500  underline font-bold text-[13px] " key={index}>{`#${tag}`}</span>
                        ))
                    }
                </div>
            </div>
        ))
      )}
    </div>
  );
}
export default Blogs;
