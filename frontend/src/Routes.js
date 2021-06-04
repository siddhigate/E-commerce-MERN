import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import ManageCategories from "./admin/ManageCategories";
import ManageProducts from "./admin/ManageProduct";
import UpdateCategory from "./admin/UpdateCategory";
import UpdateProduct from "./admin/UpdateProduct";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import Cart from "./core/Cart";
import Home from "./core/Home";
import AdminDashboard from "./user/AdminDashBoard";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashBoard";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/cart" exact component={Cart} />
          <PrivateRoute
            path="/user/dashboard"
            exact
            component={UserDashboard}
          />
          <AdminRoute
            path="/admin/dashboard"
            exact
            component={AdminDashboard}
          />
          <AdminRoute
            path="/admin/create/category"
            exact
            component={AddCategory}
          />
          <AdminRoute
            path="/admin/categories"
            exact
            component={ManageCategories}
          />
          <AdminRoute
            path="/admin/create/product"
            exact
            component={AddProduct}
          />
          <AdminRoute path="/admin/products" exact component={ManageProducts} />
          <AdminRoute
            path="/admin/product/update/:productId"
            exact
            component={UpdateProduct}
          />
          <AdminRoute
            path="/admin/category/update/:categoryId"
            exact
            component={UpdateCategory}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
