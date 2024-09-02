import { CardBody, CardButton, CardContainer, CardInfo, CardInfoSpace, Container, ContainerButton, ContainerCardCars, ImageContainer, TitleDescription } from "./card"
import {Title} from '../Title';
export const Card = ({car, title}) => {

    return (
        <>
        <Container>
        <Title>{title}</Title>

        <ContainerCardCars>
        
         {car.map((carro) => (
               <CardContainer key={carro.id}>
               <ImageContainer>
                   <img src={carro.thumbnail}/>
               </ImageContainer>
              <CardBody>
                   <TitleDescription>
                       <p>{carro.title}
                       </p>
                   </TitleDescription>
                   <CardInfo>
                       <span>R$ {carro.price}</span>   
                   </CardInfo>
                   <ContainerButton>
                       <CardButton>Confira agora</CardButton>
                   </ContainerButton>
                   <hr />
                   <CardInfoSpace>
                       <p>{carro.location.city.name}</p>
                       <p>Favoritar</p>
                   </CardInfoSpace>
              </CardBody>
           </CardContainer>
         ))}
            
            </ContainerCardCars>
        </Container>
        </>
        
    )

}