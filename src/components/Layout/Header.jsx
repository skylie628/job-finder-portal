import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { imageHelper } from "../../config/images";
import Button from "../ui/Button";
export default function Header() {
  const navItems = {};
  return (
    <header>
      <div className=" left-0 m-auto fixed top-0 w-full bg-white">
        <div className="w-full container  mx-auto ">
          <div className=" flex flex-row align-items-center ">
            <div
              className=" grow-0 shrink-0 lg:basis-1/4 
             basis-1/3 flex justify-center items-center px-4"
            >
              <Link to="/">
                <img src={imageHelper.logo} alt="" />
              </Link>
            </div>
            <div className="grow-0 shrink-0 lg:basis-3/4  basis-2/3 px-4 hidden lg:block">
              <div className="flex">
                <div className="main-menu ">
                  <NavBar />
                </div>
                <div className=" ml-auto flex gap-1 lg:items-center ">
                  <Button to="#">Register</Button>
                  <Button to="#">Login</Button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
