import { Link } from "react-router-dom"
import { HeaderContainer, Navegacao } from "./header"

export const Header = () => {
    return (
        <HeaderContainer>
            <h1><Link to='/'>WebCarros</Link></h1>
            <Navegacao>
                <li><Link to='/'>Página Inicial</Link></li>
                <li><Link to='/veiculos'>Nossos Veiculos</Link></li>
                <li><Link to='/sobre'>Sobre</Link></li>
                <li><Link>Carro</Link></li>
                <li><Link>Carro</Link></li>
            </Navegacao>
            <span>Meus carros</span>
        </HeaderContainer>
    )
}