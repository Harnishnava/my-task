import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <nav className="text-black flex space-x-6 mb-5 px-5 border-b items-center">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        <li>
          {" "}
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/">Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
