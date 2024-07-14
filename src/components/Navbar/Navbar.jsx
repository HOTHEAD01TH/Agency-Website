import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { motion } from "framer-motion"; // Importing motion
import { Sticky } from 'react-sticky'; // Importing Sticky
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/Vector.svg";
import Logo2 from "../../assets/website/Vector2.svg";
// import DarkMode from "./DarkMode";

export const MenuLinks = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "About",
    link: "/AboutUs",
  },
  {
    id: 2,
    name: "Service",
    link: "/service",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
  
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Sticky topOffset={-50}>
      {({ style, isSticky }) => (
        <motion.div
          style={{ ...style, zIndex: 10 }}
          className={`sticky top-0 w-full bg-white dark:bg-black dark:text-white duration-300 ${isSticky ? 'shadow-md' : ''}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        >
          <div className="container py-3 md:py-2">
            <div className="flex justify-between items-center">
              <motion.a
                href="/"
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <img src={Logo} alt="" className="w-16 " />
                <img src={Logo2} alt="" className="w-24 -ml-3" />
                {/* <span className="text-2xl sm:text-3xl font-semibold">Tech Bug</span> */}
              </motion.a>
              <nav className="hidden md:block">
                <ul className="flex items-center gap-8">
                  {MenuLinks.map(({ id, name, link }) => (
                    <motion.li
                      key={id}
                      className="py-4"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: id * 0.2, duration: 0.5 }}
                    >
                      <a
                        href={link}
                        className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                      >
                        {name}
                      </a>
                    </motion.li>
                  ))}
                  <motion.button
                    className="primary-btn"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      backgroundImage: "linear-gradient(45deg, #6b0fbb, #aa4fff 50%, #ff66c4)",
                      color: "#ffffff", // Ensure text color is contrasted against the gradient background
                      padding: "9px 15px", // Adjust padding as needed
                      borderRadius: "8px", // Adjust border radius as needed
                      border: "none", // Remove border if not needed
                      cursor: "pointer", // Ensure cursor changes on hover
                      boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)", // Optional: Add box shadow for depth
                    }}
                  >
                    Get Started
                  </motion.button>
                  {/* <DarkMode /> */}
                </ul>
              </nav>
              <div className="flex items-center gap-4 md:hidden">
                {/* <DarkMode /> */}
                {showMenu ? (
                  <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                ) : (
                  <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                )}
              </div>
            </div>
          </div>
          <ResponsiveMenu showMenu={showMenu} />
        </motion.div>
      )}
    </Sticky>
  );
};

export default Navbar;
