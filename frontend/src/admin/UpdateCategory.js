import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { updateCategory, getCategory } from "./helper/adminapicall";

const UpdateCategory = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    error: "",
    success: "",
    formData: ""
  });

  const { name, error, success, formData } = values;

  const { user, token } = isAuthenticated();

  const goBack = () => (
    <div className="mt-2 ml-3">
      <Link className="btn btn-sm btn-warning mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    formData.set(name, value);
    setValues({ ...values, error: "", [name]: value });
  };

  const preload = (categoryId) => {
    getCategory(categoryId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: data.name,
          formData: new FormData()
        });
      }
    });
  };

  useEffect(() => {
    preload(match.params.categoryId);
  }, []);

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">Category created successfully</h4>;
    }
  };

  const warningMessage = () => {
    if (error) {
      return <h4 className="text-danger">Failed to create category</h4>;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", success: false });
    //backend request fired
    updateCategory(match.params.categoryId, user._id, token, formData).then(
      (data) => {
        console.log("DATA", data);
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({ ...values, error: "", success: true, name: "" });
        }
      }
    );
  };

  const updateCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter the category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange("name")}
          value={name}
          required
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          Update Category
        </button>
      </div>
    </form>
  );

  return (
    <Base
      title="Update Category"
      description="Update your category here"
      className="container bg-success p-4"
    >
      {goBack()}
      <div className="row bg-white ml-3 mr-3 mb-3 rounded">
        <div className="col-md-8 offset-md-2 p-3">
          {/* {loadingMessage()}
          {successMessage()}
          {errorMessage()}
          {updateProductForm()}
          {performRedirect()} */}
          {successMessage()}
          {warningMessage()}
          {updateCategoryForm()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
