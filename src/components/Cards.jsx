const roupas = [
    { "nome": "Roupa 1", "precoAntigo": 50.99, "preco": 42.90, "estoque": 7, "imagem": "./public/roupa1.png" },
    { "nome": "Roupa 2", "precoAntigo": 45.99, "preco": 33.90, "estoque": 5, "imagem": "./public/roupa1.png" },
    { "nome": "Roupa 3", "precoAntigo": 60.99, "preco": 57.90, "estoque": 10, "imagem": "./public/roupa1.png" },
    { "nome": "Roupa 4", "precoAntigo": 40.99, "preco": 28.90, "estoque": 3, "imagem": "./public/roupa1.png" },
    { "nome": "Roupa 5", "precoAntigo": 55.99, "preco": 50.90, "estoque": 8, "imagem": "./public/roupa1.png" },
    { "nome": "Roupa 6", "precoAntigo": 30.99, "preco": 25.90, "estoque": 12, "imagem": "./public/roupa1.png" }
]

export default function Cards() {
    return (
        <main className="flex flex-col gap-y-8">
            <h2 className="text-2xl font-bold">Itens em Estoque</h2>
            <section className="grid grid-cols-3 gap-8">
                {roupas.map((roupa, index) => (
                    <div key={index} className="shadow-lg p-4 flex flex-col gap-y-3 bg-slate-100 rounded justify-center items-center">
                        <h3 className="font-medium">{roupa.nome}</h3>
                        <img src={roupa.imagem} alt={roupa.nome} width={200} />
                        <p className="font-bold">Estoque: {roupa.estoque}</p>
                        <s className="text-red-600 line-through text-sm">$ {roupa.precoAntigo}</s>
                        <p className="text-green-700 font-bold">$ {roupa.preco.toFixed(2)}</p>
                        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Adicionar ao carrinho</button>
                    </div>
                ))}
            </section>
        </main>
    );
}
