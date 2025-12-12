"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Matrix Groups", path: "/matrix-groups" },
    { name: "Courses", path: "/courses" },
    { name: "System Care", path: "/system-care" },
    { name: "Career Hub", path: "/career-hub" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Container */}
      <div className="mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo + Tagline */}
        <div className="flex flex-col leading-tight">
          <Link href="/" className="text-xl font-bold text-blue-700 tracking-wide">
            Matrix Groups
          </Link>
          <span className="text-[11px] text-gray-500 -mt-1">
            Education. Service. Innovation.
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="block px-5 py-3 text-gray-700 border-b hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
