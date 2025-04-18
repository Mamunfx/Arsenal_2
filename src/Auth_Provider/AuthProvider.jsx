import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";

  import { createContext, useEffect, useState } from "react";
import { auth } from '../../../arsenal/src/firebase.init';

  export const AuthContext = createContext();
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    
    const createNewUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert('User created successfully!'))
        .finally(() => setLoading(false));
    };
  
    const userLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
        .then( alert('Login successful!'))
        .finally(() => setLoading(false));
    };
  
    const logOut = () => {
      if (!user) {
        return ;
      }
      setLoading(true);
      return signOut(auth)
        .then(() => alert('Loged out'))
        .finally(() => setLoading(false));
    };
  
  
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
      setLoading(true);
      signInWithPopup(auth, googleProvider)
        .then(result => {
          console.log(result.user);
          setUser(result.user);
         alert('Google sign-in successful!');
        })
        .catch(error => {
          console.log('ERROR', error);
          alert('Google sign-in failed');
          setUser(null);
        })
        .finally(() => setLoading(false));
    }

    const updateUserProfile = (profile) => {
       setLoading(true); 
       return updateProfile(auth.currentUser, profile) 
       .then(() => alert('Profile updated successfully!')) 
       .catch(error => { alert(error.message); }) 
       .finally(() => setLoading(false)); 
      };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    const authInfo = {
      user,
      setUser,
      createNewUser,
      logOut,
      userLogin,
      loading,
      handleGoogleSignIn,
      updateUserProfile
    };
  
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  