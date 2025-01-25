import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile }) => {
  const baseClasses = "text-gray-300 hover:text-white transition-colors relative group";
  const mobileClasses = mobile
    ? "block px-3 py-2 text-base font-medium"
    : "px-3 py-2 text-sm font-medium";

  return (
    <a href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
    </a>
  );
};

export default NavLink;