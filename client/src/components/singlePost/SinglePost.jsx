import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="/assets/6.jpg" alt="" className="" />
        <h1 className="singlePostTitle">
          THis is the title for the posts
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author :<b>Dash</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          officiis vero, consectetur excepturi animi velit sed incidunt vitae
          soluta fugit rerum commodi deleniti temporibus consequuntur totam
          delectus ipsum autem ipsa quidem quod aliquid neque voluptatibus
          doloribus voluptates. Pariatur consequuntur suscipit eaque, quia et
          eum quod!
        </p>
      </div>
    </div>
  );
}
