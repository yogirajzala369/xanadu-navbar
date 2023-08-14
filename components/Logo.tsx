import React from "react";
import Image from 'next/image';
import { LogoProps } from "./types";

export const Logo = ({ isResponsive }: LogoProps) => {
    return (
        <Image
            src='/logo.png'
            alt='HP logo'
            width={205}
            height={75}
            className={`cursor-pointer ${isResponsive && "pt-10 mx-auto"}`}
        />
    )
}