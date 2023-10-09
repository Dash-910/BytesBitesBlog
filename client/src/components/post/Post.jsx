import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="/assets/3.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Tech</span>
          <span className="postCat">Finance</span>
        </div>
        <span className="postTitle">
            A new update for slaca with 3.5 sockets
        </span>
        <hr/>
        <span className="postDate">1 hour </span>
      </div>
    </div>
  );
}
