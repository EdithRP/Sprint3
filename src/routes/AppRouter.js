import React, { useEffect, useReducer, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../components/authContext'
import Registro from '../components/Registro';
import Login from '../components/Login'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import RoutesApp from './RoutesApp'
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { login } from '../actions/loginAction';


const AppRouter = () => {

    const [logginok, setlogginok] = useState(false)
    const auth = getAuth();
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, async(user) => {
          if (user?.uid) {
            dispatch(login(user.uid, user.displayName))
            setlogginok(true);
            
          } else {
            setlogginok(false);
          }
        });
      }, [dispatch]);

    return (
        <AuthContext.Provider value={logginok}>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={
                        <PrivateRouter>
                            <RoutesApp />
                       </PrivateRouter>
                    } />
                    <Route path='login' element={
                        <PublicRouter>
                            <Login />
                        </PublicRouter>} />
                   <Route exact path="registro"  element={<Registro />}/>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default AppRouter
