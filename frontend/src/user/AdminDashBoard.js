import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { name, email, role }
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="bav-link text-success">
              Create category
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="bav-link text-success">
              Manage categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="bav-link text-success">
              Create product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="bav-link text-success">
              Manage products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="bav-link text-success">
              Manage orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin information</h4>
        <li className="list-group-item">
          <span className="badge badge-success mr-2"> Name:</span> {name}
        </li>
        <li className="list-group-item">
          <span className="badge badge-success mr-2"> Email:</span> {email}
        </li>
        <li className="list-group-item">
          <span className="badge badge-danger mr-2"> Admin Area</span>
        </li>
      </div>
    );
  };

  return (
    <Base
      title="Welcome to admin area"
      description="Manage all of your products and orders here"
      className="container bg-success p-4"
    >
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>

        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
