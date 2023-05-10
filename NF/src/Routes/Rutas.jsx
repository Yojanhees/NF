import { Route, Routes } from "react-router-dom"
import { Menu } from "../Menu/Menu"

import { Home } from "../Home/Home"
import { Members } from "../Members/Members"
export function Rutas() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/miembros" element={<Members />} />
                <Route path="/fans" element={<Fans/>} />
                <Route path="/Shop" element={<Shop/>} /> 
                <Route path="/musica" element={<Shop/>} /> 
            </Routes>
        </>
    )
}