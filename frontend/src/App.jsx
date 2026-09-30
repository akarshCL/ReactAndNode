import React, { useEffect, useState } from 'react';
import NavbarComponent from './Component/NavbarComponent';
import FooterComponent from './Component/FooterComponent';
import './App.css';
import ProductPage from './page/productPage';
import { Route, Routes } from 'react-router-dom';
import About from './Component/About';
import PageNotFound from './Component/PageNotFound';
import Contact from './Component/Contact';
import Service from './Component/Service';
import DetailedProductPage from './Component/DetailedProductPage';
import Admin from './Admin/Admin';
import Retailer from './Retailer/Retailer';
import User from './User/User';
import Protected from './protectedRoutes/protected';
import Login from './Component/Login';
import User_Collection from './Admin/User_Collection';
const App = () => {
  
        const data = localStorage.getItem('role');
  ;

    return (
        <div className=''>
            <NavbarComponent />
            {console.log(data, 'data')}

            <Routes>
                <Route path='/' element={<ProductPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/service' element={<Service />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/:id' element={<DetailedProductPage />} />
                <Route path='*' element={<PageNotFound />} />

                <Route
                    path='/admin'
                    element={
                        <Protected userRole={data} access={['admin']}>
                            <Admin />
                        </Protected>
                    }
                >
                    <Route path='user_Collection' element={<User_Collection/>}/>
                    <Route path='retailer_Collection' element={<Retailer/>}/>


                </Route>

                <Route
                    path='/retailer'
                    element={
                        <Protected userRole={data} access={['retailer', 'admin']}>
                            <Retailer />
                        </Protected>
                    }
                />
                <Route
                    path='/user'
                    element={
                        <Protected userRole={data} access={['user', 'admin']}>
                            <User />
                        </Protected>
                    }
                />
            </Routes>

            <FooterComponent />
        </div>
    );
};

export default App;
