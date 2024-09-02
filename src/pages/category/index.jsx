import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { apiClient } from "../../api";
import { Title } from "../../components/Title";
import { Card } from "../../components/Card";

export const CategoryPage = () => {
    const { id } = useParams()
    
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    async function fetchCategory() {
        
        try {
            const dataCategory = await apiClient.get(`/cars?carro=${id}`);
            setData(dataCategory.data);
            setLoad(false);
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchCategory();
    },[data])

    return (
        <>
            {load ? 'carregandot' : <Card title={`Categoria ${id}`} key={data.id} car={data}/>}
            
        </>   
    )
}