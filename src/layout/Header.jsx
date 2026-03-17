import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-20 bg-blue-300">
      <div className="h-full m-auto bg-amber-200 w-5/6 flex items-center justify-between">
        <img
          className="h-full"
          src="https://etec-system.42web.io/assets/etec.png"
          alt=""
        />

        <div>
          <ul className="flex  gap-10 ">
            <li className="bg-gray-200 py-2 px-5">
              <Link to={"/"}> Home </Link>
            </li>
            <li>
              <Link to={"/about"}> About </Link>
            </li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
