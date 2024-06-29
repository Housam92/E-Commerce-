import React from "react";
import HomePage from "./Page/Home/HomePage";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import NavBarLogin from "./Components/Auth/NavBarLogin";
import Foooter from "./Components/Utility/Foooter";
import LoginPage from "./Page/Home/LoginPage";
import Register from "./Components/Auth/Register";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrand from "./Page/Brand/AllBrand";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetailsPage from "./Page/Products/ProductDetailsPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethodPage from "./Page/Checkout/ChoosePayMethodPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Page/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddNewProductPage from "./Page/Admin/AdminAddNewProductPge";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavouriteProductPage from "./Page/User/UserFavouriteProductPage";
import UserAllAddressPage from "./Page/User/UserAllAddressPage";
import UserAddAddressPage from "./Page/User/UserAddAddressPage";
import UserEditAddressPage from "./Page/User/UserEditAddressPage";
import UserProfilePage from "./Page/User/UserProfilePage";
import AdminEditProductPage from "./Page/Admin/AdminEditProductPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allCategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrand />} />   
          <Route path="/products" element={<ShopProductsPage />} /> 
          <Route path="/products/:id"element={<ProductDetailsPage/>} />      
          <Route path="/cart" element={<CartPage/>} />   
          <Route path="/order/paymethod" element={<ChoosePayMethodPage/>} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage/>} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage/>} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage/>} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage/>} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage/>} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage/>} />
          <Route path="/admin/addproduct" element={<AdminAddNewProductPage/>} />
          <Route path="/admin/addproduct" element={<AdminAddNewProductPage/>} />
          <Route path="/user/allorders" element={<UserAllOrdersPage/>} />
          <Route path="/user/favourit" element={<UserFavouriteProductPage/>} />
          <Route path="/user/address" element={<UserAllAddressPage/>} />
          <Route path="/user/edit-address" element={<UserEditAddressPage/>} />
          <Route path="/user/add-address" element={<UserAddAddressPage/>} />
          <Route path="/user/profile" element={<UserProfilePage/>} />
          <Route path="/admin/editproduct/:id" element={<AdminEditProductPage/>} />
        </Routes>
      </BrowserRouter>
      <Foooter />
    </div>
  );
}

export default App;
