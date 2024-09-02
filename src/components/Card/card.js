import styled from "styled-components";

export const Container = styled.div`

padding: 0 5rem;
display: flex;

flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
flex-wrap: wrap;
color: ${(props) => props.theme.colors.gray};
`;

export const ContainerCardCars = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;

export const CardContainer = styled.div`

    width: 17rem;
    padding: 0 0 .7rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden
    position: relative;;
`;

export const CardBody = styled.div`

    padding: 0 1rem;

`;

export const TitleDescription = styled.div`

    max-height: 50%;
    flex-wrap: wrap;

    h4 {
        color: ${(props) => props.theme.colors.black};
    }

    p {
        font-size: 0.8rem;
    }

`;

export const CardInfo = styled.div`

    margin-top: 10px;

    span {
        font-size: 1.2rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.black};
    }

`;

export const ContainerButton = styled.div`

    padding: 1rem 0;

`;

export const CardButton = styled.button`

    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    border-radius: 8px;
    border: none;
    width: 100%;
    padding: .6rem 2rem;

`;

export const CardInfoSpace = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin-top: 0.6rem;
        font-size: 0.8rem;
    }
`;

export const ParagrafoBlack = styled.p`

color: ${(props) => props.theme.colors.black};
font-size: ${(props) => props.font};

`;

export const ContainerCard = styled.div`

    display: flex;
    flex-wrap: wrap;

`;

export const ImageContainer = styled.div`

    position: relative;


    img {
       
        
        width: 100%;
        object-fit: cover;
    }

`;