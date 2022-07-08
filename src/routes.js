import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Layouts/AppLayout";

export const useRoutes = (isAuthenticated, isAdmin) => {
    let rout;
    rout = <Routes>
        <Route element={<AppLayout/>}>
        <Route path={'/'} exact element={<HomePage/>}/>
        <Route path={'/:category_ids'} exact element={<HomePage/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}
        />
    </Routes>
    return (rout)
};
