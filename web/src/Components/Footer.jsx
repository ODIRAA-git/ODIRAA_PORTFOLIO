import React from "react";

function Footer() {
  // Scroll smoothly to top when footer is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      onClick={scrollToTop}
      className="py-4 bg-gray-900 text-white text-center text-sm cursor-pointer hover:bg-gray-800 transition-colors"
      title="Click to scroll to top"
    >
      © {new Date().getFullYear()} Madu Odiraa Perpetua. All rights reserved.
    </footer>
  );
}

export default Footer;
