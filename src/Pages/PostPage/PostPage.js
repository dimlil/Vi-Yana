import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import styles from './post.module.css'

function PostPage() {
  const [post, setPost] = useState("");
  let { id } = useParams();
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/post/${id}`;
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPost(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {post ? (
        <div>
          {post.map((p, key) => (
            <div key={key} className={styles.post}>
              <h1 className={styles.title}>{p.title}</h1>
              {parse(p.content)}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PostPage;
