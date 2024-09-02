import { useContext } from "react"
import { Title } from "../../components/Title"
import { CategoryContext } from "../../context/useCategory"
import { CardCategory } from "./components/card"
import { ContainerCards } from "./home"

export const Home = () => {

    const {category} = useContext(CategoryContext);

    return (
        <>
            <Title>Categorias</Title>

            <ContainerCards>
                {category.map((cat) => (
                    <CardCategory key={cat.id} data={cat}/>
                ))}
            </ContainerCards>



        </>
    )
}