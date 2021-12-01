import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    path: "/todo-app",
    text: "Home",
  },
  {
    id: 2,
    path: "/todo-app/about",
    text: "About",
  },
]

const Navbar = () => {
  return (
    <nav className="navBar">
      <ul>
        {links.map(link => {
          return <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link">{link.text}</NavLink>
          </li>
        })}
      </ul>
    </nav>
  )
}
export default Navbar;
