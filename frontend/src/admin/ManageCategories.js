import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { deleteCategory, getCategories } from "./helper/adminapicall";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getCategories()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setCategories(data);
        }
      })
      .catch();
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisCategory = (categoryId) => {
    deleteCategory(categoryId, user._id, token)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          preload();
        }
      })
      .catch();
  };

  const goBack = () => (
    <div className="mt-2 ml-3">
      <Link className="btn btn-sm btn-warning mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  return (
    <Base
      title="Welcome admin"
      description="Manage your products here"
      className="container bg-success p-4"
    >
      {goBack()}
      <div className="row bg-white ml-3 mr-3 mb-3 rounded">
        <div className="col-md-8 offset-md-2 p-3">
          <h2 className="text-center my-3">Your product categories</h2>

          {categories.map((category, index) => {
            return (
              <div className="row text-center mb-2 " key={index}>
                <div className="col-4">
                  <h5 className="text-left">{category.name}</h5>
                </div>
                <div className="col-4">
                  <Link
                    className="btn btn-success"
                    to={`/admin/category/update/${category._id}`}
                  >
                    <span className="">Update</span>
                  </Link>
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisCategory(category._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default ManageCategories;
