export default function Presentation() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

            {/* Bloc 1 : Mon Profil */}
            <article id="profil" className="scroll-mt-32 bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-emerald-400 font-mono">01. Mon Profil</h2>
                <p className="text-neutral-300 leading-relaxed">
                    Je suis un développeur passionné par la tech. J'aime construire des interfaces propres et performantes. Mon objectif est de transformer des problèmes complexes en solutions simples et élégantes.
                </p>
            </article>

            {/* Bloc 2 : Mon CV */}
            <article id="cv" className="scroll-mt-32 bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl flex flex-col justify-center text-center">
                <h2 className="text-3xl font-bold mb-6 text-emerald-400 font-mono">02. Mon CV</h2>
                <p className="text-neutral-300 leading-relaxed mb-8">
                    Découvrez mon parcours, mes compétences techniques et mes expériences professionnelles en détail.
                </p>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-emerald-500 transition">
                    Télécharger le PDF
                </a>
            </article>

            {/* Bloc 3 : Passions */}
            <article id="passions" className="scroll-mt-32 bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-emerald-400 font-mono">03. Passions</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                    Le code demande de la rigueur, tout comme ma plus grande passion : le tir à l'arc à cheval. Cette discipline m'apprend la concentration absolue, la précision et la gestion du stress en mouvement.
                </p>
            </article>

        </section>
    );
}