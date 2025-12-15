
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-ifresa-blue py-20 md:py-32 text-center text-white">
            {/* Video de fondo */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute min-w-full min-h-full object-cover"
                >
                    <source src="/Video Project.mp4" type="video/mp4" />
                </video>
                {/* Overlay oscuro para legibilidad */}
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-ifresa-blue/90 via-transparent to-black/30"></div>
            </div>

            <div className="z-10 container mx-auto px-4 flex justify-center">
                <div className="max-w-4xl p-8 md:p-12 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                        Tecnología y Manufactura <br className="hidden md:block" />
                        <span className="text-ifresa-metal">en Tierra del Fuego</span>
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100 md:text-xl drop-shadow-md font-medium">
                        Impulsando la innovación desde Río Grande. Calidad internacional, mano de obra argentina.
                    </p>
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <a href="#products" className="flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-ifresa-blue transition-all hover:bg-gray-100 shadow-md">
                            Nuestros Productos <ArrowRight className="h-4 w-4" />
                        </a>
                        <a href="#about" className="rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white shadow-sm">
                            Conoce Más
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
