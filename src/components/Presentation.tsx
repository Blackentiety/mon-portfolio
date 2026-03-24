export default function Presentation() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 px-4">

            <article id="profil" className="scroll-mt-32 bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-emerald-400 font-mono">01. Mon Profil</h2>
                <p className="text-neutral-300 leading-relaxed">
                    Je suis un développeur passionné par la tech. J'aime construire des interfaces propres et performantes. Mon objectif est de transformer des problèmes complexes en solutions simples et élégantes.
                </p>
            </article>

            <article id="cv" className="scroll-mt-32 bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-xl flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-6 text-emerald-400 font-mono w-full text-left">02. Mon CV</h2>

                <div className="w-full h-[30rem] sm:h-[40rem] mb-6 rounded-xl overflow-hidden border border-neutral-700 bg-neutral-950">
                    <iframe
                        src="/BOUDIN---LEGRET-Lukas-cv.pdf"
                        alt="Détails du header de mon CV"
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                <a href="/BOUDIN---LEGRET-Lukas-cv.pdf" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-emerald-600 text-white font-semibold px-4 py-3 rounded-xl hover:bg-emerald-500 transition">
                    Ouvrir en plein écran
                </a>
            </article>

            <article id="passions" className="scroll-mt-32 bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-emerald-400 font-mono">03. Passions</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                    Le code demande de la rigueur, tout comme ma plus grande passion : le tir à l'arc à cheval. Cette discipline m'apprend la concentration absolue, la précision et la gestion du stress en mouvement.
                </p>
            </article>

        </section>
    );
}