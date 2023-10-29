import React from "react";
import { links, social } from "./data";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-heading">
        <img src={logo} alt="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                <p>{text}</p>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
