export default function Header() {
    return (
        <header className="py-8 flex justify-between font-extrabold">
            <h2>Scarpa Store</h2>
            <nav>
                <ul className="flex gap-x-8 font-bold">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Loja</a></li>
                    <li><a href="#">Atendimento ao Cliente</a></li>
                </ul>
            </nav>
        </header>
    )
}
