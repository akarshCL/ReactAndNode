import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Store } from '../ContextProvider/AppProvider';

const DetailedProductPage = () => {
    let { id } = useParams();
    console.log(id,"id")
    // const [product, setProduct] = useState(null);
const {singleData,setSingleData}=useContext(Store);

   useEffect(() => {
        console.log("kjh")
        fetchData(id);
    }, []);

    const fetchData = async (id) => {
        let data = await fetch(`http://localhost:3000/product/productList/${id}`);
        let res = await data.json();
        setSingleData(res)
        
        
    };

 

    return (
        <>
            <div className='min-h-screen bg-gray-50 p-6'>
           {console.log(singleData,"dd")}
                {singleData?.id && (
                    <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden'>
                              {console.log(singleData,"dd")}
                        <div className='grid md:grid-cols-2 gap-8 p-8'>
                            {/* Image */}
                            <div className='relative bg-gray-100 rounded-xl overflow-hidden'>
                                <span className='absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
                                    {singleData.discount}% OFF
                                </span>

                                <img src={singleData.image} alt={singleData.title} className='w-full h-[450px] object-cover hover:scale-105 transition' />
                            </div>

                            {/* Details */}
                            <div className='flex flex-col justify-center'>
                                <p className='text-violet-600 font-semibold'>{singleData.brand}</p>

                                <h1 className='text-4xl font-bold text-gray-900 mt-2'>{singleData.title}</h1>

                                {/* Rating */}
                                <div className='flex items-center gap-2 mt-4'>
                                    <span className='bg-green-600 text-white px-3 py-1 rounded-lg'>⭐ {singleData.rating}</span>
                                    <span className='text-gray-500'>Ratings & Reviews</span>
                                </div>

                                <p className='text-gray-600 mt-5 leading-6'>{singleData.description}</p>

                                {/* Price */}
                                <div className='flex items-center gap-3 mt-6'>
                                    <span className='text-3xl font-bold'>₹{singleData.price}</span>

                                    <span className='text-gray-400 line-through'>₹{Math.round(singleData.price / (1 - singleData.discount / 100))}</span>

                                    <span className='text-green-600 font-semibold'>{singleData.discount}% OFF</span>
                                </div>

                                {/* Colors */}
                                <div className='mt-6'>
                                    <p className='font-semibold mb-2'>Select Color</p>

                                    <div className='flex gap-2'>
                                        {singleData.colors.map((color) => (
                                            <button
                                                className='border border-gray-300 px-4 py-2 rounded-lg
                                hover:border-violet-600 hover:text-violet-600'
                                            >
                                                {color}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className='flex gap-4 mt-8'>
                                    <button className='flex-1 py-3 rounded-xl border-2 border-violet-600 text-violet-600 font-semibold hover:bg-violet-50'>
                                        🛒 Add to Cart
                                    </button>

                                    <button className='flex-1 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700'>
                                        Buy Now
                                    </button>
                                </div>

                                {/* Stock */}
                                <p className='text-sm text-gray-500 mt-4'>
                                    🚚 Free Delivery &nbsp; | &nbsp; 🛡 {singleData.warranty} &nbsp; | &nbsp; 📦 {singleData.stock} available
                                </p>
                            </div>
                        </div>

                        {/* Features + Specifications */}
                        <div className='border-t p-8 grid md:grid-cols-2 gap-10'>
                            <div>
                                <h2 className='text-xl font-bold mb-4'>Features</h2>

                                <ul className='space-y-2 text-gray-600'>
                                    {singleData.features.map((feature) => (
                                        <li>✓ {feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className='text-xl font-bold mb-4'>Specifications</h2>

                                <div className='space-y-3'>
                                    {Object.entries(singleData.specifications).map(([key, value]) => (
                                        <div className='flex justify-between border-b pb-2'>
                                            <span className='text-gray-500 capitalize'>{key}</span>

                                            <span className='font-medium'>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default DetailedProductPage;
