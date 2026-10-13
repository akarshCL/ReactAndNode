import { createContext, useEffect, useReducer, useState } from 'react';

export const Store = createContext();


const AppProvider = ({ children }) => {
    const [list,setList] = useState([]);
    const [search,setSearch]=useState("");
    const[singleData,setSingleData]=useState({});

    // let initialValue={
    //     list:[],
    //     search:"",
    //     singleData:{},
    //     role:"",
    //     prfoile:{}
    // }


    // function reduce(state,action){

    //     return ;
    // }
// function add(a,b){
// retrurn (a+b)}

// console.log(add(1,2))
    // const [state,dispatch]=useReducer(reduce,initialValue)
    
    return <Store.Provider value={{ list,setList,search,setSearch,singleData,setSingleData }}>{children}</Store.Provider>;
};

export default AppProvider;
