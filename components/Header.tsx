"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BsGithub, BsLinkedin, BsList, BsTwitter, BsX } from 'react-icons/bs';
import { Logo } from './Logo';
import { NavItem } from './NavItem';
import { SocialMediaLink } from './SocialMediaLink';

const styles = {
    socialMedia: 'cursor-pointer hover:text-[#A855F7] ease-in-out duration-300 ml-10',
    navOpen: 'fixed top-0 left-0 w-[100%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500',
    navClose: 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500',
    toggleNavbar: 'h-8 w-8 text-[#A855F7] cursor-pointer',
    responsiveNav: 'flex-col py-4 grid justify-center hover:text-purple-500 items-center',
    responsiveNavItem: 'text-2xl py-4 transition duration-300  cursor-pointer',
    responsiveSocialMedia: 'flex flex-row justify-center pt-10 items-center'
}

const navItems = [{label: 'Products'}, {label: 'About'}, {label: 'Blog'}, {label: 'Press'}];

const socialMediaIconComponents = [BsGithub, BsLinkedin, BsTwitter];

const socialMediaLinks = socialMediaIconComponents.map(IconComponent => ({
    icon: <IconComponent size={30} className={styles.socialMedia} />
}));

export const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const toggleNavbar = () => setOpen(!isOpen);

  return (
    <header>
        <nav className='w-full h-24 shadow-2xl bg-black'>
            <div className='flex items-center justify-between h-full px-4 w-full'>
                <Link href='/'>
                    <Logo />
                </Link>
                <ul className='text-white hidden sm:flex' data-testid="navbar">
                    {navItems.map((item, index) => <NavItem key={index} label={item.label} link='/' />)}
                    {socialMediaLinks.map((item, index) => <SocialMediaLink key={index} icon={item.icon} link='/' />)}
                </ul>
                <div className='sm:hidden pl-24'>
                    <BsList aria-label='Toggle Navigation' onClick={toggleNavbar} className={styles.toggleNavbar} />
                </div>
            </div>
            <div className={isOpen ? styles.navOpen : styles.navClose}>
                <div className='flex w-full items-center justify-end'>
                    <BsX onClick={toggleNavbar} className={styles.toggleNavbar} />
                </div>
                <Logo isResponsive={true}/>
                <ul className={styles.responsiveNavItem}>
                    {navItems.map((item, index) => (
                        <li key={index} onClick={() => setOpen(false)} className={styles.responsiveNav}                   >
                            <Link href='/'>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className={styles.responsiveSocialMedia}>
                    {socialMediaLinks.map((item, index) => <SocialMediaLink key={index} icon={item.icon} link='/' />)}
                </div>
            </div>
        </nav>
    </header>
)};
