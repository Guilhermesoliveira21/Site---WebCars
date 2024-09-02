import React, { createContext, useEffect, useState } from 'react';
import {apiClient} from '../api/index.js'

const CarsContext = createContext();
const CarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  
  async function fetchCars() {
    try {
        const req = await apiClient.get('/cars');
        setData(req.data)
    } catch (error) {
        console.log('Erro')
    }
  }

  useEffect(() => {
    fetchCars();
  },[])

  return (
    <CarsContext.Provider value={{ data, setData }}>
      {children}
    </CarsContext.Provider>
  );
};

export { CarsProvider, CarsContext };
