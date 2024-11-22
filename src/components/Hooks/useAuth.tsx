import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useAuth = () => {

    const authContextData = useContext(AuthContext);
    const user = authContextData?.user;
    const createUser = authContextData?.createUser;
    const updateUserName = authContextData?.updateUserName;
    const loading = authContextData?.loading;
    const logoutUser = authContextData?.logoutUser;
    const loginUser = authContextData?.loginUser;
    const setLoading = authContextData?.setLoading;
    const signInWithGoogle = authContextData?.signInWithGoogle;

    return { user, createUser, updateUserName, loading, logoutUser, loginUser, setLoading, signInWithGoogle }
};

export default useAuth;