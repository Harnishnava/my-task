"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Tasks", href: "/tasks" },
  ];

  return (
    <nav className="text-black flex space-x-6 mb-5 h-14 px-5 border-b items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((links) => (
          <Link
            className={classNames({
              "text-gray-900": links.href === currentPath,
              "text-gray-500": links.href !== currentPath,
              "hover:text-gray-700 hover:underline transition-all duration-200":
                true,
            })}
            key={links.label}
            href={links.href}
          >
            {links.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default navbar;
