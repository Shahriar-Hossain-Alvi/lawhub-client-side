import { getAuth, createUserWithEmailAndPassword, UserCredential, User, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";


interface AuthContextType {
    user: User | null;
    createUser: (email: string, password: string) => Promise<UserCredential>;
    updateUserName: (name: string) => Promise<void>;
    loginUser: (email: string, password: string) => Promise<UserCredential>;
    loading: boolean;
    setLoading: (value: boolean) => void;
    logoutUser: () => Promise<void>;
    signInWithGoogle: () => Promise<UserCredential>;
}


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
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
        setLoading(true);
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, {
                displayName: name
            })
        }
        else {
            return Promise.reject(new Error("No authenticated user is found"))
        }
    }


    // login user
    const loginUser = (email: string, password: string) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }


    // logout user
    const logoutUser = () => {
        return signOut(auth);
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
        return unsubscribe;
    }, [])



    const authInfo: AuthContextType = {
        user,
        createUser,
        loading,
        updateUserName,
        logoutUser,
        loginUser,
        setLoading,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;