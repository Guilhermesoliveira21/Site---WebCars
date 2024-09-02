import { Link } from "react-router-dom"
import { Container, Card, TitleCard } from "./card"

export const CardCategory = ({data}) => {
console.log(data)

    return (
        <Container>
           <Link to={`/categoria/${data.link}`}>
            <Card image={'https://'+data.image}>
                    <TitleCard>{data.title}</TitleCard>
                </Card>
           </Link>
        </Container>
    )

}