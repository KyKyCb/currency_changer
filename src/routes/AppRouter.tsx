import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./Routes";
import { UAH_TO_USD } from "../constants/routerConstants";
import { useAppSelector } from "../redux/hooks";
import Loader from "../components/Loader/Loader";

const AppRouter: FC = () => {
    const isLoading = useAppSelector(state=> state.exchange.isLoading)

    if(isLoading){
        return <Loader/>
    }
    return (
        <Routes>
            {publicRoutes.map(({ path, Element }) => (
                <Route key={path} path={path} element={<Element />} />
            ))}
            <Route path="*" element={<Navigate to={UAH_TO_USD} />} />
        </Routes>
    );
};

export default AppRouter;