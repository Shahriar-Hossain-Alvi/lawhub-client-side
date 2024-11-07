import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, ReactNode, useState } from "react";
import { app } from "../Firebase/firebase.config";



const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const createUser = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
        user,
        createUser,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;