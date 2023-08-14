import React from "react";
import Link from 'next/link';
import { NavItemProps } from "./types";

export const NavItem = ({ label, link }: NavItemProps) => {
  return (
    <li className="ml-10 uppercase border-b border-white text-xl transition duration-300 hover:text-purple-500 hover:border-purple-500">
      <Link href={link}>{label}</Link>
    </li>
  );
}
