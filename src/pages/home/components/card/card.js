import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-wrap: wrap;
 
`;

export const Card = styled.div`

    width: 15rem;
    height: 26vh;
    border-radius: 6px;
    box-shadow: 0 0 2px #000000;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &::after {
        content: '';
        background-color: #00000057;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        transition: .2s;
    }

    &:hover::after {
        content: '';
        position: absolute;
        background-color: #00000057;
        background-image: url(${(props) => props.image});
        background-size: cover;
        background-position: center;
        top: 0;
        left: 0;
        transform: scale(1.01);
    }

`;

export const TitleCard = styled.h4`
    z-index: 9999999;
    color: ${(props) => props.theme.colors.white};
    font-size: 2rem;
    text-align: start;
    position: absolute; 
    bottom: 1rem;
    padding: 0 1rem;

`;