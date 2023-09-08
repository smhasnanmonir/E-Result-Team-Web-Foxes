import { createContext, useEffect, useState } from "react";
import { app } from "../firebase.config";
import { GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, sendEmailVerification } from "firebase/auth";
import axios from "axios";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (name, photourl) => {
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photourl});
    }
    const sendVerificationEmail = () =>{
       return sendEmailVerification(auth.currentUser)
    }

    const signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () =>{
        return signInWithPopup(auth, provider);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser){
                axios.post('https://e-result-server.vercel.app/jwt', {email: currentUser.email})
                .then(data=> {
                    localStorage.setItem('token', data.data.token);
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('token');
                setLoading(false);
            }
        });
        return () =>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        signin,
        signInGoogle,
        sendVerificationEmail,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;