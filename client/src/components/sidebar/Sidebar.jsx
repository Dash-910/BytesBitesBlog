import "./sidebar.css";

export default function Sidebar() {
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
          <li className="sidebarListItem">AI</li>
          <li className="sidebarListItem">Blockchain</li>
          <li className="sidebarListItem">ML</li>
          <li className="sidebarListItem">Web Dev</li>
          <li className="sidebarListItem">JAVA</li>
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
