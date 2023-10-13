import { useEffect } from "react";
import {Link} from "react-router-dom";
import "./singlePost.css";
import { useState} from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';


export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post,setPost] = useState({});

  useEffect(()=>{
    const getPost = async () =>{
      // path var is the id for the post we take out from the location
      const res = await axios.get("/posts/"+path);
      setPost(res.data);
    };
    getPost();
  },[path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author :
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">{new Date (post.createdAt).toDateString}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}
