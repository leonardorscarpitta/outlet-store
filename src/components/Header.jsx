export default function Header() {
    return (
        <header className="py-8 flex items-center justify-center gap-x-12 font-extrabold bg-slate-600 rounded text-slate-100">
            <h2><strong className="font-mono text-3xl">S</strong>carpa <strong className="font-mono text-3xl">S</strong>tore</h2>
            <nav>
                <ul className="flex gap-x-8 font-medium">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Loja</a></li>
                    <li><a href="#">Atendimento ao Cliente</a></li>
                </ul>
            </nav>
        </header>
    )
}
