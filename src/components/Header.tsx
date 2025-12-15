"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled
                    ? "bg-ifresa-blue/70 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
                    : "bg-white/10 backdrop-blur-sm border-b border-white/20 py-4"
                }`}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className={`relative transition-all duration-300 ${isScrolled ? "h-10 w-32" : "h-12 w-40"}`}>
                            <img src="/logo.png" alt="IFRESA Logo" className="object-contain h-full w-full" />
                        </div>
                    </Link>
                </div>

                {/* Navegación Desktop */}
                <nav className="hidden md:flex gap-6">
                    <Link
                        href="#about"
                        className="text-sm font-medium transition-colors text-white hover:text-gray-200"
                    >
                        Sobre Nosotros
                    </Link>
                    <Link
                        href="#products"
                        className="text-sm font-medium transition-colors text-white hover:text-gray-200"
                    >
                        Productos
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium transition-colors text-white hover:text-gray-200"
                    >
                        Contacto
                    </Link>
                </nav>

                {/* Botón Móvil */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Menú Móvil Desplegable */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-lg">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="#about"
                            className="text-base font-medium text-gray-700 hover:text-ifresa-blue py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sobre Nosotros
                        </Link>
                        <Link
                            href="#products"
                            className="text-base font-medium text-gray-700 hover:text-ifresa-blue py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Productos
                        </Link>
                        <Link
                            href="#contact"
                            className="text-base font-medium text-gray-700 hover:text-ifresa-blue py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contacto
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
