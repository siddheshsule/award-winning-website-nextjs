import React from "react";
import { FaDiscord, FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p>&copy; Zyloft, {new Date().getFullYear()}. All rights reserved.</p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-black transition-colors duration-500 ease-in-out hover:text-white">
          <b>Disclaimer:</b> This site is created just for educational purposes. No
          data is stored.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
