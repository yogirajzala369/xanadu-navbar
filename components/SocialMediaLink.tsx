import React from "react";
import Link from 'next/link';
import { SocialMediaLinkProps } from "./types";

export const SocialMediaLink = ({ icon, link }: SocialMediaLinkProps) => {
  return (
    <Link href={link}>{icon}</Link>
  );
}
