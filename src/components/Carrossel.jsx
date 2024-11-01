import { useState, useEffect } from 'react';

const images = [
    { id: 1, src: './public/carrossel1.jpg', alt: 'Image 1' },
    { id: 2, src: './public/carrossel2.jpg', alt: 'Image 2' },
    { id: 3, src: './public/carrossel3.jpg', alt: 'Image 3' },
];

const Carrossel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Troca a imagem a cada 3 segundos
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <section className="relative w-full h-64 overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image) => (
                    <div key={image.id} className="min-w-full h-64 md:h-80 lg:h-96 flex items-center justify-center bg-gray-100">
                        <img src={image.src} alt={image.alt} className="max-w-full max-h-full object-contain" />
                    </div>
                ))}
            </div>
            <button
                className="font-extrabold absolute left-1/4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
                onClick={prevSlide}
            >
                &lt;
            </button>
            <button
                className="font-extrabold absolute right-1/4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
                onClick={nextSlide}
            >
                &gt;
            </button>
        </section>
    );
};

export default Carrossel;
