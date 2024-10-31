import React, { useState } from 'react';

export default function Formulario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode enviar os dados para um servidor ou realizar outra ação
        console.log({ name, email, message });
        setSubmitted(true);
        // Resetar os campos após o envio
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="w-1/2 mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contato</h2>
            {submitted && (
                <p className="text-green-600 mb-4">Mensagem enviada com sucesso!</p>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="name">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="message">
                        Mensagem
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};
