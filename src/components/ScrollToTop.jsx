import React, { useState } from "react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
  }


  return (
    <div>
      {showButton && (
        <button onClick={handleClick} className="scroll-to-top">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}    
      {/* code for the rest of the component goes here */}
    </div>
  );
}

export default ScrollToTop;
