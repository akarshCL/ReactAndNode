import { createContext, useState } from 'react';

export const Store = createContext();


const AppProvider = ({ children }) => {
    const [list,setList] = useState([]);
    const [search,setSearch]=useState("");
    const[singleData,setSingleData]=useState({});
    
    return <Store.Provider value={{ list,setList,search,setSearch,singleData,setSingleData }}>{children}</Store.Provider>;
};

export default AppProvider;
