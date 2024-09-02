import styled from "styled-components";

export const GlobalTheme = styled.div`
    background-color: ${props => props.theme.backgroundColor.primary};
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

export const ContainerTheme = styled.div`
    min-width: 1280px;
    overflow: hidden;

    @media (max-width: 1280px) {
        min-width: 100%;
    }
`;

export const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`;