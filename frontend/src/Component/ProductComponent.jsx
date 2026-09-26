import React, { useEffect, useState } from 'react';

const ProductComponent = () => {
    const [data, setData] = useState(null);
    // async function fetchs() {
    //     console.log('data fetching');
    //     let data = await fetch('http://localhost:3000/product/productList');
    //     let res = await data.json();
    //     // console.log(res,"res")
    //     localStorage.setItem('product', JSON.stringify(res));
    // }
    // let localData = localStorage.getItem('product');
useEffect(() => {

        // Load data from localStorage
        const loadProducts = () => {
            const localData = localStorage.getItem('product');

            if (localData) {
                setData(JSON.parse(localData));
            }
        };
        // Initial load
        loadProducts();
        // Listen for localStorage update
        window.addEventListener('productUpdated', loadProducts);
        // Cleanup
        return () => {
            window.removeEventListener('productUpdated', loadProducts);
        };

    }, []);

    return (
        <div className='flex flex-wrap gap-2 justify-center'>
            {console.log(data)}

            {data && (
                <>
                    {data.map((item, index) => {
                        return (
                            <>
                                <div
                                    class='w-80 overflow-hidden rounded-2xl bg-white shadow-lg 
            border border-gray-100 hover:shadow-2xl 
            transition duration-300'
                                >
                                    <div
                                        class='h-44 bg-gradient-to-br from-gray-100 to-gray-200 
              flex items-center justify-center'
                                    >
                                        <span class='text-6xl'>🎧</span>
                                    </div>

                                    <div class='p-5'>
                                        <div class='flex items-center justify-between mb-3'>
                                            <span
                                                class='px-3 py-1 text-xs font-semibold rounded-full 
                   bg-blue-100 text-blue-600'
                                            >
                                                {item.category}
                                            </span>

                                            <span class='flex items-center gap-1 text-sm font-medium text-gray-700'>⭐ {item.rating}</span>
                                        </div>

                                        <h2 class='text-xl font-bold text-gray-800 mb-2'>{item.title}</h2>

                                        <p class='text-xs text-gray-400 mb-4'>Product ID: #1</p>

                                        <div class='flex items-center justify-between mb-4'>
                                            <span class='text-2xl font-bold text-gray-900'>₹{item.price}</span>

                                            <span class='text-sm text-green-600 font-medium'>{item.stock} in stock</span>
                                        </div>

                                        <button
                                            class='w-full rounded-xl bg-black text-white py-3 
                   font-semibold hover:bg-gray-800 
                   active:scale-95 transition'
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default ProductComponent;
