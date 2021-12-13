import React,  {useEffect, useState} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Counter from '../components/Counter'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'
import { mayorcantvendida, mostrarProductoAsincronico } from "../actions/actionProductos";
import { useDispatch} from 'react-redux';
import {List} from '../components/List'

const RoutesApp = () => {

        const dispatch = useDispatch();
      
        useEffect(() => {  
          dispatch(mostrarProductoAsincronico())
          dispatch(mayorcantvendida())
       }, [])
      
       
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<List />} />
                <Route path='home' element={<List />} />
                <Route path='counter' element={<Counter />} />
                <Route path='profile' element={<Profile />} />
                <Route path='*' element={<Navigate to="/home" />} />
            </Routes>
        </>
    )
}

export default RoutesApp
