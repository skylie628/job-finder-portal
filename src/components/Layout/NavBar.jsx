import React from "react";
import { Link } from "react-router-dom";
function NavItem({ url, children, subItems = null }) {
  return (
    <li>
      <Link
        className=" block py-[26px] px-[20px] text-dark-purple text-base font-barlow font-medium hover:text-dark-pink"
        to={url}
      >
        {children}
      </Link>
      {subItems && (
        <ul className="submenu hidden">
          {subItems.map(({ url, title }) => (
            <li key={url}>
              <Link to={url}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
export default function NavBar() {
  return (
    <nav className="d-none d-lg-block">
      <ul id="navigation" className=" flex ">
        <NavItem url="/">Home</NavItem>
        <NavItem url="/find-job">Find a Jobs</NavItem>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/page">Page</NavItem>
        <NavItem url="/contact">Contact</NavItem>
      </ul>
    </nav>
  );
}
