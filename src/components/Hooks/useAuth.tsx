import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useAuth = () => {

    const authContextData = useContext(AuthContext);
    const user = authContextData?.user;
    const createUser = authContextData?.createUser;
    const updateUserName = authContextData?.updateUserName;
    const loading = authContextData?.loading;
    const logoutUser = authContextData?.logoutUser

    return { user, createUser, updateUserName, loading, logoutUser }
};

export default useAuth;