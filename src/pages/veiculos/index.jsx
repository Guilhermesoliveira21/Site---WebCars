import { useContext } from "react";
import { Card } from "../../components/Card";
import { CarsContext } from "../../context/useCars";


export const Veiculos = () => {

    const {data} = useContext(CarsContext);

    return (
        <>
            
            <div>
               
             <Card key={data.id} title='Carros usados e seminovos' car={data}/>

      
          
          </div>
        </>
    );
}