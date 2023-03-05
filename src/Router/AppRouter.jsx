import { Routes, Route } from "react-router-dom"
import CardSite from "../Page/CardSite"
import NotFound from "../Page/NotFound"
import Home from "../Page/Home"

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<CardSite />} />
            <Route path="/home" element={<Home />} />
            <Route path="/card" element={<CardSite />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
