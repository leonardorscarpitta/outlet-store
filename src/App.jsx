import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Carrossel from "./components/Carrossel";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

export default function App() {
  return (
    <main className="flex flex-col gap-y-8 mx-56">
      <Header />
      <hr />
      <Banner />
      <hr />
      <Carrossel />
      <hr />
      <Cards />
      <hr />
      <Formulario />  
      <Footer />
    </main>
  )
}
