import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"

function Layout() {
  const navigate = useNavigate();
    
    const [data, setData] = useState("");
    const [type, setType] = useState("posts");
    console.log(type);
  
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/" + type)
    .then((res) => res.json())
    .then((result) => setData(result.slice(0, 20)));
  }, [type]);

  return (
    <>
    <main>
      <div className="container  main-container">
      <select 
      value={type}
      onChange={(e) => {
        setType(e.target.value)
      }} className="select" name="" id="">
        <option  value="todos">TODOS</option>
        <option value="posts">POSTS</option>
        <option value="comments">COMMENTS</option>
        <option value="photos">PHOTOS</option>
      </select>
        <ul className="nav-list">
         <h2 className="type">{type}</h2>
          { data ? data.map((item) =>{
              return <div className="li-div">
              <img className="photo" src={item.thumbnailUrl} alt="" />
              <li key={item.id} className="nav-item">{
                item?.title ??  item?.body ?? item?.name ?? item?.thumbnailUrl}
                </li>
                </div> 
            }):  <li className="empty" >data is not</li>
            }
        </ul>
      </div>
    </main>
    </>
  );
}

export default Layout;
