import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Sobre } from "../pages/Sobre"
import { LayoutRoutes } from "./Layout"
import { CategoryPage } from "../pages/category"
import { Veiculos } from "../pages/veiculos"

export const RoutesPersonalizadas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutRoutes />}>
                    <Route index element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="/veiculos" element={<Veiculos />} />
                    <Route path="/categoria/:id" element={<CategoryPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}