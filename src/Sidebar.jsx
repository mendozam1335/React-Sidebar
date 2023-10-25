import React from "react";
import { links, social } from "./data";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./App";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <nav className={isSidebarOpen ? "nav-container" : "nav-container closed"}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="nav header logo" />
          <button className="nav-close" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className="links-container">
          <ul className="links">
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id} className="link">
                  <a href={url}>
                    {icon}
                    <p>{text}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-links">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id} className="social-link">
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
