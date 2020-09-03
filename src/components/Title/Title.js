import React from "react";

import "./title.css";

function Title() {
  return (
    <>
      <article className="title-wrapper">
        <h1 className="title">
          The Breaking Bad A<span className="color-green">P</span>I
        </h1>
        <h6 className="subtitle">...Tread Lightly</h6>
      </article>
      <article className="detail-paragraph">
        <p className="bold-text">Now with Better Call Saul Data! </p>
        <p className="text-with-link">
          Check out the{" "}
          <a href="#" className="document-link">
            Documentation
          </a>
        </p>
        <p>
          <span className="bold-text">New!</span> Try out the information
          playground{" "}
          <a href="#" className="document-link">
            here!
          </a>
        </p>
      </article>
    </>
  );
}

export default Title;
