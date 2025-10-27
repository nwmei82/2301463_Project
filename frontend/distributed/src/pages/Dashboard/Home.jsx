import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";

const Home = () => {
    useUserAuth();
    const navigate = useNavigate()

    const [dashboardData, setDashboardData] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchDataboardData = async () => {
        if(loading) return;

        setLoading(true)

        try{
            const response = await axiosInstance.get(`${API_PATHS.DASHBOARD.GET_DATA}`)

            if(response.data) {
                setDashboardData(response.data)
            }
        }catch(error){
            console.log("Somthing went wrong. Please try again.", error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=> {
        fetchDataboardData()
        return () => {};
    }, []);
    return (
        <DashboardLayout activeMenu="Dashboard">
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Home;