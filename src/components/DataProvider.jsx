import React, { useState, useEffect } from "react";
import { DataContext } from "../context/db.js";
import api from '../context/data.js';

const DataProvider = ({ children }) => {

 const [data, setData] = useState([]);
 const [crew, setCrew] = useState([]);
 const [technology, setTechnology] = useState([]);

//  useEffect(() => {

//    localStorage.setItem('user', JSON.stringify(user));

//  }, [user]);


 //retrieve data
 const retrieveDatas = async ()=> {
  const response = await api.get("/user");
  return response.data;
 }

 useEffect( ()=>{
  const getAllDatas = async ()=> { 
    const allDatas = await retrieveDatas();
    if(allDatas) setUser(allDatas);

  }

  getAllDatas();
 }, [])

 return (

   <DataContext.Provider value={{ data, setData }}>

     {children}

   </DataContext.Provider>

 )

}

export default DataProvider;