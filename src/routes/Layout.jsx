import { Outlet } from "react-router-dom"
import { Header } from "../components/header"
import { ContainerTheme } from "../theme/globalTheme"

export const LayoutRoutes = () => {

    return (
        <>
            <Header/>
            <ContainerTheme>
            <Outlet/>     
            </ContainerTheme>

        </>
    )

}