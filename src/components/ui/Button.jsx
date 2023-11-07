import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
export default function Button({ to, className, children, ...props }) {
  return (
    <Link
      to={to}
      className={clsx(
        "inline-block cursor-pointer text-white bg-dark-pink py-[17px] px-[44px] mr-5 font-medium  overflow-hidden tracking-wide text-sm ",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
