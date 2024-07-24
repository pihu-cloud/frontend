import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
const navigate = useNavigate()
const [message,setMessage] = useState('')

    useEffect(()=>{
        const token = localStorage.getItem('token');
        console.log("token:",token)

        if(!token){
            navigate('/login')
        }
        else{
            axios.get('http://localhost:8888/pages/dashboard', 
            {headers:{
                authorization: `Bearer ${token}`,
            },
        })
        .then(res=>{
            const responseData = res.data;
            alert(responseData.msg)
            setMessage(responseData.msg)
        })
        }

    },[navigate])

  return (
    <div>
        <h1>Dashboard Page</h1>
        <p>{message}</p>

    </div>
  )
}

export default Dashboard