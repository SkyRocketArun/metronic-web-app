
import React from 'react'
import { Routes, Route, } from "react-router-dom";
import EditContact from '../component/editContact';
import ProductOrder from '../component/productOrder/productOrder';
import UserDetails from '../component/userDetails/UserDetails';
import HomePage from '../views/Dashboard';


export default function index() {
    return (
        <div>
            {/* <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/table" element={<ProductOrder />} />
                <Route path="/edit/:name" element={<EditContact />} />
            </Routes> */}
            {/* <Route path="/" element={<UserDetails />} /> */}
        </div>
    )
}
