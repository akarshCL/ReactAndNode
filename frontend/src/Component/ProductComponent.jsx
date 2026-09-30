import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from '../ContextProvider/AppProvider';

const ProductComponent = () => {
    // const [data, setData] = useState(null);
       const {list,setSingleData}=useContext(Store)
    let navigate=useNavigate();

    // useEffect(() => {
        // const loadProducts = () => { /// this code is not in use as we are using context API
        //     const localData = localStorage.getItem('product');

        //     if (localData) {
        //         setData(JSON.parse(localData));
        //     }
        // };
        // loadProducts();
        // window.addEventListener('productUpdated', loadProducts);

        // return () => {
        //     window.removeEventListener('productUpdated', loadProducts);
        // };
    // }, []);

    return (
        <div className='flex flex-wrap gap-10 justify-center mt-10'>
            {/* {console.log(data)} */}

            {list && (
                <>
                    {list.map((item, index) => {
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
                                        <img src={item.image} alt='pro_img' width="100px" height="100px"/>
                                       
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
                                         

                                     <div className='flex justify-between'>
                                           <p class='text-xs text-gray-400 mb-4'>Product ID: {item.id}</p>
                                         <p className='cursor-pointer' onClick={()=>{
                                            navigate(`/product/${item.id}`);
                                            setSingleData({})
                                            
                                         }}>See Details...</p>
                                     </div>

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
