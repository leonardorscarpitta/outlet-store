import { Banner, Cards, Carrossel, Formulario } from "../components/index.js";

export default function Home() {
    return (
        <main className="flex flex-col gap-y-8 mx-56">
            <hr />
            <Carrossel />
            <hr />
            <Banner />
            <hr />
            <Cards />
            <hr />
            <Formulario />
            <hr />
        </main>
    )
}