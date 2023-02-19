import Navbar from "./Navbar";
import Hero from "./Hero"

export default function Layout({children}) {
    return (
        <>
        <Navbar></Navbar>
        <Hero></Hero>
        <main>
        {children}</main>
        </>
    )}