import React, { useEffect, useState } from "react";

function Header() {
  const [showHeader, HandleShowHeader] = useState(false);

  const transitionHeader = () => {
    if (window.scrollY > 100) {
      HandleShowHeader(true);
    } else {
      HandleShowHeader(false);
    }
  };
  //Listener scroll
  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  });
  return (
    <div
      className={`w-full h-16 sticky top-0 right-0 z-40 px-8 bg-brand-dark2 border-b border-brand-800`}
    >
      <div className="flex items-center h-full">
        <img
          src="https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5ldGZsaXh8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Admin"
          className="h-10 w-10 rounded-full border border-gray-400 ml-auto"
        />
      </div>
    </div>
  );
}

export default Header;
