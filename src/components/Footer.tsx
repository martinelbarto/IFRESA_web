export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">IFRESA</h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Industria Fueguina de Relojería Electrónica S.A.<br />
                            Comprometidos con el desarrollo industrial de Tierra del Fuego.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Contacto</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Río Grande, Tierra del Fuego</li>
                            <li>Parque Industrial</li>
                            <li>Tel: +54 2964 XX-XXXX</li>
                            <li>info@ifresa.com.ar</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Enlaces</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">La Empresa</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors">Productos</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} IFRESA. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
