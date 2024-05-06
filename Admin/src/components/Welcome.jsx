import React from "react";
import "../component-styles/styles.css"
function Welcome() {
  return (
    <div className="container">
     <div className="flex justify-center text-center items-center p-10">
        <h2 className="text-5xl font-semibold">Welcome to admin page</h2>
     </div>
     <div className="flex justify-center text-center items-center p-10">
      <p>
        This page lets you to add new news and check analytics based on NNI website.
      </p>
     </div>
    </div>
  );
}

export default Welcome;
