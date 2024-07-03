import React from "react";
import Link from "next/link";

const NavLink = ({ path, title }) => {
  return (
    <Link
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      href={path}
    >
      {title}
    </Link>
  );
};

export default NavLink;
