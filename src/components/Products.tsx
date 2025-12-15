"use client"; // Necesario para interactividad (hooks)

import { Smartphone, Tv, Wind, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Products() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const products = [
        {
            title: "Celulares",
            description: "Smartphones de última generación con diseño innovador y rendimiento excepcional.",
            icon: <Smartphone className="h-12 w-12 text-ifresa-blue mb-4 group-hover:text-white transition-colors" />,
            bgGradient: "from-blue-50 to-white",
        },
        {
            title: "Televisores Smart",
            description: "Experiencia visual inmersiva con tecnología LED y 4K UHD producida localmente.",
            icon: <Tv className="h-12 w-12 text-ifresa-blue mb-4 group-hover:text-white transition-colors" />,
            bgGradient: "from-gray-50 to-white",
        },
        {
            title: "Climatización",
            description: "Aires acondicionados eficientes para el confort de tu hogar y oficina.",
            icon: <Wind className="h-12 w-12 text-ifresa-blue mb-4 group-hover:text-white transition-colors" />,
            bgGradient: "from-blue-50 to-white",
        },
        {
            title: "Fotografía",
            description: "Cámaras semiprofesionales con óptica de alta precisión y sensores avanzados.",
            icon: <Camera className="h-12 w-12 text-ifresa-blue mb-4 group-hover:text-white transition-colors" />,
            bgGradient: "from-gray-50 to-white",
        },
    ];

    // Detectar qué tarjeta está en el centro
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const containerCenter = container.scrollLeft + container.clientWidth / 2;

            let closestIndex = 0;
            let minDistance = Number.MAX_VALUE;

            // Iterar sobre los hijos directos (las tarjetas)
            const children = container.children;
            for (let i = 0; i < children.length; i++) {
                const child = children[i] as HTMLElement;
                // Calculamos el centro de la tarjeta respecto al inicio del scroll
                const childCenter = child.offsetLeft + child.offsetWidth / 2;

                const distance = Math.abs(containerCenter - childCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = i;
                }
            }
            setActiveIndex(closestIndex);
        }
    };

    useEffect(() => {
        // Calcular posición inicial
        handleScroll();
        // Agregar listener
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.children[0].clientWidth + 32; // Ancho + Gap
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <section id="products" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Líneas de Producción</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Innovación y calidad en cada dispositivo fabricado en nuestras plantas.
                    </p>
                </div>

                {/* Contenedor del Carrusel */}
                <div className="relative group/carousel max-w-[100vw] md:max-w-7xl mx-auto">

                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-xl text-ifresa-blue hover:bg-ifresa-blue hover:text-white transition-all border border-gray-100"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar py-20 px-[5vw] md:px-[30%]"
                    >
                        {products.map((prod, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <div
                                    key={idx}
                                    className={`
                                group relative snap-center shrink-0
                                w-[85vw] md:w-[450px]
                                bg-gradient-to-br ${prod.bgGradient}
                                rounded-[2.5rem] p-8 md:p-12
                                transition-all duration-500 ease-out
                                cursor-grab active:cursor-grabbing
                                border border-white/60
                                ${isActive
                                            ? "scale-100 opacity-100 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] z-10 border-ifresa-blue/10 translate-y-0"
                                            : "scale-90 opacity-50 shadow-none z-0 grayscale-[50%] translate-y-4 blur-[1px] hover:opacity-80 hover:scale-95 hover:grayscale-0 hover:blur-0"
                                        }
                            `}
                                >
                                    {/* Overlay de Brillo Activo */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-[2.5rem] pointer-events-none" />
                                    )}

                                    <div className="relative z-10 flex flex-col items-start h-full justify-between min-h-[300px] md:min-h-[350px]">
                                        <div>
                                            <div className={`
                                        p-5 rounded-3xl mb-8 transition-all duration-500
                                        ${isActive ? "bg-white shadow-md text-ifresa-blue scale-110" : "bg-gray-100/50 text-gray-400"}
                                    `}>
                                                {prod.icon}
                                            </div>
                                            <h3 className={`
                                        text-3xl font-bold mb-4 transition-colors duration-300
                                        ${isActive ? "text-gray-900" : "text-gray-400"}
                                    `}>
                                                {prod.title}
                                            </h3>
                                            <p className={`
                                        text-lg leading-relaxed transition-colors duration-300
                                        ${isActive ? "text-gray-600" : "text-gray-300"}
                                    `}>
                                                {prod.description}
                                            </p>
                                        </div>

                                        <div className={`
                                    mt-8 pt-8 border-t w-full transition-all duration-300
                                    ${isActive ? "border-gray-100 opacity-100" : "border-transparent opacity-0"}
                                `}>
                                            <span className="text-base font-bold text-ifresa-blue flex items-center gap-2">
                                                Ver detalles <ChevronRight className="h-5 w-5" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-4 md:right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-xl text-ifresa-blue hover:bg-ifresa-blue hover:text-white transition-all border border-gray-100"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
