import Link from 'next/link';
import { getProjectsData } from '@/lib/projects';

// On ajoute "async" car Next.js va chercher les données sur le serveur
export default async function Projects() {

    // On récupère tes projets depuis les fichiers Markdown !
    const projects = getProjectsData();

    return (
        <section id="projets" className="scroll-mt-32 mb-24 px-4">
            <h2 className="text-4xl font-extrabold mb-12 text-center text-neutral-200 font-mono">
                <span className="text-emerald-400">/</span> Mes Projets
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projets/${project.id}`}
                        className="group block bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-emerald-500 transition-all hover:-translate-y-2 shadow-lg flex flex-col"
                    >
                        {/* On affiche l'image définie dans ton fichier .md */}
                        <div className="w-full h-40 bg-neutral-800 overflow-hidden border-b border-neutral-800">
                            <img
                                src={project.image}
                                alt={`Image du projet ${project.title}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                            <div className="text-xs font-mono text-emerald-500 mb-2">{project.tech}</div>
                            <h3 className="text-xl font-bold mb-2 text-neutral-100 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2">
                                {project.description}
                            </p>
                        </div>
                    </Link>
                ))}

            </div>
        </section>
    );
}