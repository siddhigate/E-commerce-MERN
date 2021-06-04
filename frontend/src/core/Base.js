import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "p-4",
  children
}) => (
  <div>
    <Menu></Menu>
    <div className="container-fluid wrapper">
      <div className="jumbotron  text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>

      <div className={className}>{children}</div>
    </div>

    <footer className="footer mt-auto py-3">
      <div className="container-fluid bg-dark text-white text-center py-3 mb-2">
        <h5>If you got any questions, feel free to reach out</h5>
        <button className="btn btn-warning btn-md">Contact us</button>
      </div>
      <div className="container bg-white">
        <span className="">An Amazing Place to buy stuff</span>
      </div>
    </footer>
  </div>
);

export default Base;
