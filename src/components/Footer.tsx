import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} MIT-Career Hub — A Unit of Matrix Groups
      </p>
      <p className="text-xs mt-1">Teaching is the Greatest Art of Patriotism</p>
    </footer>
  );
};

export default Footer;
