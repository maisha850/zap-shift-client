import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading , setLoading]=useState(true)
    const provider = new GoogleAuthProvider()
    const createUser =(email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email , password)
    }
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth , email , password)
    }
    const socialLogIn=()=>{
        setLoading(true)
        return signInWithPopup(auth , provider)
    }
    const updateUser=(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }
    const logOut=()=>{
return signOut(auth)
    }
    const authInfo = {
createUser,
signInUser,
socialLogIn,
user,
setUser,
loading,
logOut,
updateUser
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    return (
       <AuthContext value={authInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;