import React, { useEffect, useState } from 'react';

const NavbarComponent = () => {
    const [active, setActive] = useState('');
    const [search, setSearch] = useState(''); //1//2
    const handleAuthClick = (type) => {
        setActive(type);
    };
    async function fetchs(category) {
        let data1 = await fetch(`http://localhost:3000/product/productList?category=${category}`, {
            method: 'GET',
        });

        let res = await data1.json();

        localStorage.setItem('product', JSON.stringify(res));

        // Notify ProductComponent
        window.dispatchEvent(new Event('productUpdated'));
    }

    useEffect(() => {
        let timer;
        if (search) {
            timer = setTimeout(() => {
                fetchs(search);
            }, 1000);
        } else {
            // Search cleared → fetch complete data
            fetchAllProducts();
        }
        return () => {
            clearTimeout(timer);
        };
    }, [search]);
    async function fetchAllProducts() {
        let data = await fetch('http://localhost:3000/product/productList');

        let res = await data.json();

        localStorage.setItem('product', JSON.stringify(res));

        window.dispatchEvent(new Event('productUpdated'));
    }

    return (
        <div>
            {/* <button onClick={()=>{setCount(count+1)}}>Click</button> */}
            {/* Navbar */}
            <div className='flex items-center justify-between w-[90%] mx-auto text-3xl'>
                <div>Logo</div>

                <ul className='flex gap-5 list-none'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Career</li>
                    <li>Contact</li>
                </ul>

                <div>
                    <input
                        type='text'
                        placeholder='Search.....'
                        name='search'
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </div>

                <div className='flex'>
                    <button className='px-5 py-3 ml-2 text-xl rounded-xl' onClick={() => handleAuthClick('login')}>
                        Login
                    </button>

                    {/* <button
                        className="px-5 py-3 ml-2 text-xl rounded-xl"
                        onClick={() => handleAuthClick("signup")}
                    >
                        Signup
                    </button> */}
                </div>
            </div>

            {/* Popup */}
            {active && (
                <div className='fixed inset-0 flex items-center justify-center bg-black/50' onClick={() => setActive('')}>
                    {/* Popup Box */}
                    <div className='bg-white p-8 rounded-xl w-[250px] pr-15' onClick={(e) => e.stopPropagation()}>
                        {active === 'login' && (
                            <>
                                <h2 className='text-2xl font-bold'>Login</h2>

                                <input type='email' placeholder='Email' className='border p-3 w-full mt-4' />

                                <input type='password' placeholder='Password' className='border p-3 w-full mt-4' />

                                <button className='ml-25  bg-blue-500 text-white px-5 py-3 mt-4 rounded'>Login</button>
                                <br />

                                <span>Don't have Account : </span>
                                <span className='text-red-500' onClick={() => setActive('signup')}>
                                    Click here
                                </span>
                            </>
                        )}

                        {active === 'signup' && (
                            <>
                                <h2 className='text-2xl font-bold'>Signup</h2>

                                <input type='text' placeholder='Name' className='border p-3 w-full mt-4' />

                                <input type='email' placeholder='Email' className='border p-3 w-full mt-4' />

                                <input type='password' placeholder='Password' className='border p-3 w-full mt-4' />

                                <button className='ml-25 bg-green-500 text-white px-5 py-3 mt-4 rounded'>Signup</button>
                                <br />
                                <span>Already have Account : </span>
                                <span className='text-red-500' onClick={() => setActive('login')}>
                                    Click here
                                </span>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavbarComponent;
