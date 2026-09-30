import { Navigate } from 'react-router-dom';

const Protected = ({ userRole, access, children }) => {


    if (!userRole) {
               return <Navigate to="/" replace />;
      
    }

    if (!access.includes(userRole)) {
        return <h1>Access Denied</h1>;
    }

    return children;
};



export default Protected;
