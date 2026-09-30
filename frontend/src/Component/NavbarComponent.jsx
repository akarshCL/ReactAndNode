import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Store } from '../ContextProvider/AppProvider';

const NavbarComponent = () => {
    const navigate=useNavigate();
    const [active, setActive] = useState('');
    // const [search, setSearch] = useState(''); //1//2// not in use as we are useing from our context chanel
    const {setList,search,setSearch,}=useContext(Store)
    const handleAuthClick = (type) => {
        setActive(type);
       
    };
    async function fetchs(category) {
        let data1 = await fetch(`http://localhost:3000/product/productList?category=${category}`, {
            method: 'GET',
        });

        let res = await data1.json();
        setList(res)

        // localStorage.setItem('product', JSON.stringify(res));
// this is not in use as context api we are using
        // window.dispatchEvent(new Event('productUpdated'));
    }

    async function fetchAllProducts() {
        let data = await fetch('http://localhost:3000/product/productList');

        let res = await data.json();
           setList(res)

        // localStorage.setItem('product', JSON.stringify(res));// this is not in use as context api we are using

        // window.dispatchEvent(new Event('productUpdated'));
    }

    useEffect(() => {
        let timer;
        if (search) {
            timer = setTimeout(() => {
                fetchs(search);
            }, 1000);
        } else {
            fetchAllProducts();
        }
        return () => {
            clearTimeout(timer);
        };
    }, [search]);

   return (
    <div >
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="w-[92%] max-w-7xl mx-auto h-20 flex items-center justify-between gap-8">

                {/* Logo */}
                <div
                    onClick={() => navigate("/")}
                    className="cursor-pointer flex items-center gap-2 group"
                >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                        P
                    </div>

                    <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                        ProductHub
                    </span>
                </div>

                {/* Navigation */}
                <ul className="hidden md:flex items-center gap-2 list-none text-[16px] font-medium">

                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition-all duration-200 ${
                                    isActive
                                        ? "bg-violet-100 text-violet-700 font-semibold"
                                        : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition-all duration-200 ${
                                    isActive
                                        ? "bg-violet-100 text-violet-700 font-semibold"
                                        : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/service"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition-all duration-200 ${
                                    isActive
                                        ? "bg-violet-100 text-violet-700 font-semibold"
                                        : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
                                }`
                            }
                        >
                            Service
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition-all duration-200 ${
                                    isActive
                                        ? "bg-violet-100 text-violet-700 font-semibold"
                                        : "text-gray-600 hover:text-violet-600 hover:bg-violet-50"
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>

                </ul>

                {/* Search */}
                <div className="relative hidden sm:block">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        🔍
                    </span>

                    <input
                        type="text"
                        placeholder="Search products..."
                        name="search"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        className="w-56 lg:w-64 pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50
                        text-sm outline-none transition-all duration-200
                        focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-100
                        placeholder:text-gray-400"
                    />
                </div>

                {/* Login */}
                <div>
                    <button
                        className="px-6 py-3 rounded-xl text-sm font-semibold text-white
                        bg-gradient-to-r from-violet-600 to-blue-500
                        shadow-md shadow-violet-200
                        hover:shadow-lg hover:shadow-violet-300
                        hover:-translate-y-0.5
                        active:translate-y-0
                        transition-all duration-200"
                        onClick={() => handleAuthClick("login")}
                    >
                        Login
                    </button>
                </div>

            </div>
        </nav>

        {/* Popup */}
        {active && (
            <div
                className="fixed inset-0 z-[100] flex items-center justify-center
                bg-black/50 backdrop-blur-sm px-4"
                onClick={() => setActive("")}
            >

                {/* Popup Box */}
                <div
                    className="relative w-full max-w-md bg-white rounded-2xl
                    shadow-2xl p-8 animate-[fadeIn_.2s_ease-out]"
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* Close Button */}
                    <button
                        onClick={() => setActive("")}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full
                        bg-gray-100 text-gray-500
                        hover:bg-red-100 hover:text-red-500
                        transition"
                    >
                        ✕
                    </button>

                    {/* Login */}
                    {active === "login" && (
                        <div>

                            <div className="text-center mb-6">
                                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl
                                bg-gradient-to-br from-violet-600 to-blue-500
                                flex items-center justify-center text-white text-2xl">
                                    🔐
                                </div>

                                <h2 className="text-3xl font-bold text-gray-800">
                                    Welcome Back
                                </h2>

                                <p className="text-gray-500 mt-1 text-sm">
                                    Login to continue
                                </p>
                            </div>

                            <div className="space-y-4">

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="border border-gray-200 p-3 w-full rounded-xl
                                        outline-none bg-gray-50
                                        focus:bg-white focus:border-violet-500
                                        focus:ring-4 focus:ring-violet-100 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="border border-gray-200 p-3 w-full rounded-xl
                                        outline-none bg-gray-50
                                        focus:bg-white focus:border-violet-500
                                        focus:ring-4 focus:ring-violet-100 transition"
                                    />
                                </div>

                                <button
                                    className="w-full bg-gradient-to-r from-violet-600 to-blue-500
                                    text-white py-3 rounded-xl font-semibold
                                    shadow-md hover:shadow-lg
                                    hover:-translate-y-0.5 transition-all"
                                    onClick={()=>{
                                        localStorage.setItem("role","user")
                                    }}
                                >
                                    Login as user
                                </button>
                                   <button
                                    className="w-full bg-gradient-to-r from-violet-600 to-blue-500
                                    text-white py-3 rounded-xl font-semibold
                                    shadow-md hover:shadow-lg
                                    hover:-translate-y-0.5 transition-all"
                                    onClick={()=>{
                                        localStorage.setItem("role","retailer")
                                    }}
                                >
                                    Login as retailer
                                </button>
                                   <button
                                    className="w-full bg-gradient-to-r from-violet-600 to-blue-500
                                    text-white py-3 rounded-xl font-semibold
                                    shadow-md hover:shadow-lg
                                    hover:-translate-y-0.5 transition-all"
                                    onClick={()=>{
                                        localStorage.setItem("role","admin")
                                    }}
                                >
                                    Login as admin
                                </button>

                            </div>

                            <p className="text-center text-sm text-gray-500 mt-6">
                                Don't have an account?{" "}
                                <span
                                    className="text-violet-600 font-semibold cursor-pointer hover:underline"
                                    onClick={() => setActive("signup")}
                                >
                                    Create Account
                                </span>
                            </p>

                        </div>
                    )}

                    {/* Signup */}
                    {active === "signup" && (
                        <div>

                            <div className="text-center mb-6">
                                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl
                                bg-gradient-to-br from-green-500 to-emerald-500
                                flex items-center justify-center text-white text-2xl">
                                    👤
                                </div>

                                <h2 className="text-3xl font-bold text-gray-800">
                                    Create Account
                                </h2>

                                <p className="text-gray-500 mt-1 text-sm">
                                    Join us today
                                </p>
                            </div>

                            <div className="space-y-4">

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="border border-gray-200 p-3 w-full rounded-xl
                                        outline-none bg-gray-50
                                        focus:bg-white focus:border-green-500
                                        focus:ring-4 focus:ring-green-100 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="border border-gray-200 p-3 w-full rounded-xl
                                        outline-none bg-gray-50
                                        focus:bg-white focus:border-green-500
                                        focus:ring-4 focus:ring-green-100 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Create a password"
                                        className="border border-gray-200 p-3 w-full rounded-xl
                                        outline-none bg-gray-50
                                        focus:bg-white focus:border-green-500
                                        focus:ring-4 focus:ring-green-100 transition"
                                    />
                                </div>

                                <button
                                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500
                                    text-white py-3 rounded-xl font-semibold
                                    shadow-md hover:shadow-lg
                                    hover:-translate-y-0.5 transition-all"
                                >
                                    Create Account
                                </button>

                            </div>

                            <p className="text-center text-sm text-gray-500 mt-6">
                                Already have an account?{" "}
                                <span
                                    className="text-green-600 font-semibold cursor-pointer hover:underline"
                                    onClick={() => setActive("login")}
                                >
                                    Login
                                </span>
                            </p>

                        </div>
                    )}

                </div>
            </div>
        )}
    </div>
);
};

export default NavbarComponent;
