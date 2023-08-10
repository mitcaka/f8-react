import React from "react";
import { useEffect, useState } from "react";

//Callback luôn được gọi sau khi component mounted
const tabs = ["posts", "photos", "albums"];
const Mount = () => {
  const [title, setTitles] = useState("");
  const [posts, setPosts] = useState([]);
  const [types, setTypes] = useState("posts");
  const [isShow, setIsShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${types}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [types]);

  useEffect(() => {
    const handleScroll = () => {
      // if (window.scrollY >= 200) {
      //   setIsShow(true);
      // } else {
      //   setIsShow(false);
      // }
      setIsShow(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <h1>{width}</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitles(e.target.value)}
      />
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => setTypes(tab)}
          style={
            types === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post, i) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {isShow && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go to top
        </button>
      )}
    </div>
  );
};

export default Mount;
