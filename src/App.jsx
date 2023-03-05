import "./App.css"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import AppRouter from "./Router/AppRouter"

export default function App() {
    return (
        <>
            <Header />
            <AppRouter />
            <Footer />
        </>
    )
}
