import "./sidebar.css";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useState} from "react";
import axios from 'axios';


export default function Sidebar() {
    const [cat,setCats] = useState([]);

    useEffect(()=>{
      const getCats = async () =>{
        const res = await axios.get("/category")
        setCats(res.data)
      } 
      getCats();
    },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="/assets/4.jpg" alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolore recusandae totam eveniet voluptate? Qui perferendis
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarItem">CATEGORIES</span>
        <ul className="sidebarList">
            {cat.map((c)=>(
              <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarListItem">{c.name}</li>
              </Link>  
            ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
