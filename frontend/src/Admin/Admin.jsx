import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Admin = () => {
   let data= useLocation();
   console.log(data,"data")
    return (
        <div>
            <h1>Admin</h1>

            <ul>
                <li><NavLink to="/admin/user_Collection">User Registration</NavLink></li>
                <li><NavLink to="/admin/retailer_Collection">Retailer Registration</NavLink></li>
                <li><NavLink to="/revenue">Revenue</NavLink> </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default Admin;
