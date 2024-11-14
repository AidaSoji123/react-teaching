import React, { useEffect, useState } from "react";
import Posts from "./Posts";

const JsonData = () => {
  const [datas, setDatas] = useState([]);
  const loadPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setDatas(data);
  };

  useEffect(()=>{
    loadPosts();
  },[])
  return (
    <div className="m-5 text-center">
      {/* <button onClick={loadPosts}>Load</button> */}
      {datas.map((post) => (
        <Posts key={post.id} title = {post.title} body = {post.body}/>
      ))}
    </div>
  );
};

export default JsonData;
