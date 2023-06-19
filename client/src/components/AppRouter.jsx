import {Routes, Route, Navigate} from "react-router-dom";
import React, { useContext } from 'react';
import { authRoutes, publicRoutes } from "../routes";
import { PROJECTS_ROUTE } from "../utils/consts";
import { Context } from "../index";


const AppRouter = () => {
    const {user} = useContext(Context)

  return (
    
    <Routes >
        {user.isAuth && authRoutes.map(({path, element}) => 
            <Route key={path} path={path} element={element} exact/>
        )}
        {publicRoutes.map(({path, element}) => 
            <Route key={path} path={path} element={element}/>
        )}
        <Route path='*' element={<Navigate to={PROJECTS_ROUTE}/>} />
    </Routes>

  )
}

export default AppRouter