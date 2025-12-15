export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                <strong>IFRESA</strong> (Industria Fueguina de Relojería Electrónica S.A.) es un pilar fundamental en la industria tecnológica argentina.
                            </p>
                            <p>
                                Como parte estratégica del <strong>Grupo KMG</strong>, hemos liderado procesos de reconversión tecnológica en Tierra del Fuego, adaptándonos a los desafíos del mercado global y manteniendo los más altos estándares de calidad.
                            </p>
                            <p>
                                Desde nuestra planta en Río Grande, combinamos experiencia productiva con innovación constante, fabricando productos que conectan y entretienen a millones de argentinos.
                            </p>
                        </div>
                    </div>
                    {/* Imagen de Planta */}
                    <div className="md:w-1/2 h-64 md:h-80 relative rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="/Plant.jpg"
                            alt="Planta Industrial IFRESA"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}
