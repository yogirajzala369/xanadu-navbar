"use client"
import React from 'react';

const styles = {
  footer: 'container mx-auto text-center text-white',
  footerItems: 'mt-4 flex flex-col sm:flex-row justify-center items-center',
  footerItem: 'text-xl text-white hover:text-purple-500 mx-2 my-2 sm:my-0'
}

export const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className={styles.footer}>
        <p>&copy; 2023 HP blog. All rights reserved.</p>
        <div className={styles.footerItems}>
          {['Privacy Policy', 'Terms of Service'].map((item, index) => (
            <a key={index} href="#" className={styles.footerItem}>
              {item}
            </a>
          ))}
        </div>
      </div>
  </footer>
  );
};
