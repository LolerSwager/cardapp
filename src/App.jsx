import React, { useState } from "react"
import styled from "styled-components"
import "./App.css"
import CardSite from "./Page/CardSite"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

export default function App() {
    return (
        <>
            <Header />
            <CardSite />
            <Footer />
        </>
    )
}
