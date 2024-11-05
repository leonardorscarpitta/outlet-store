const roupas = [
    { "nome": "Kit moletom", "precoAntigo": 59.99, "preco": 47.90, "estoque": 7, "imagem": "./public/roupa1.png" },
    { "nome": "Camiseta de Algodão - Amarela", "precoAntigo": 72.99, "preco": 61.90, "estoque": 5, "imagem": "./public/roupa2.avif" },
    { "nome": "Camiseta de Algodão - Cinza", "precoAntigo": 88.99, "preco": 69.90, "estoque": 10, "imagem": "./public/roupa3.jpg" },
    { "nome": "Kit moletom - Amarelo", "precoAntigo": 49.99, "preco": 39.90, "estoque": 3, "imagem": "./public/roupa4.jpg" },
    { "nome": "Camiseta Feminina", "precoAntigo": 64.99, "preco": 52.90, "estoque": 8, "imagem": "./public/roupa5.jpg" },
]

export default function Cards() {
    return (
        <main className="flex flex-col gap-y-8">
            <h2 className="text-2xl font-bold text-center">Itens em Estoque</h2>
            <section className="grid grid-cols-4 gap-8">
                {roupas.map((roupa, index) => (
                    <div key={index} className="shadow-lg p-4 flex flex-col gap-y-3 bg-slate-100 rounded justify-center items-center">
                        <h3 className="font-medium">{roupa.nome}</h3>
                        <img className="min-h-40" src={roupa.imagem} alt={roupa.nome} width={200} />
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
