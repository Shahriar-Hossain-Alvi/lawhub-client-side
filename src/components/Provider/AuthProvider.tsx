import { getAuth, createUserWithEmailAndPassword, UserCredential, User, updateProfile, onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";


interface AuthContextType {
    user: User | null;
    createUser: (email: string, password: string) => Promise<UserCredential>;
    updateUserName: (name: string) => Promise<void>;
    loading: boolean;
}


const auth = getAuth(app);
export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);


    // Create new user
    const createUser = (email: string, password: string): Promise<UserCredential> => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // update the username
    const updateUserName = (name: string) => {
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, {
                displayName: name
            })
        }
        else {
            return Promise.reject(new Error("No authenticated user is found"))
        }
    }



    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                console.log(currentUser);
                setLoading(false);
            }
            else {
                console.log(currentUser);
                setLoading(false);
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])



    const authInfo: AuthContextType = {
        user,
        createUser,
        loading,
        updateUserName
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;