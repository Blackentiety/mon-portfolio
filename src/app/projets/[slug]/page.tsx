import { getProjectData, getProjectsData } from '@/lib/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return getProjectsData().map((project) => ({
        slug: project.id,
    }));
}

// On utilise async/await car on va chercher des données
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // On récupère les données de ce projet spécifique grâce au slug dans l'URL
    const project = await getProjectData(slug);

    // Si le projet n'existe pas (mauvaise URL), on affiche une page 404
    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 container mx-auto px-6 py-10 font-sans">

            {/* Bouton retour */}
            <Link href="/#" className="inline-flex items-center text-sm text-neutral-400 hover:text-emerald-400 mb-10 transition-colors font-mono">
                ← Retour à l'accueil
            </Link>

            <main className="max-w-4xl mx-auto">

                {/* En-tête du projet */}
                <header className="mb-12 border-b border-neutral-800 pb-10 text-center">
                    <div className="text-sm font-mono text-emerald-500 mb-3">{project.tech}</div>
                    <h1 className="text-5xl font-extrabold text-neutral-100 mb-6">{project.title}</h1>
                    <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">{project.description}</p>
                </header>

                {/* Image principale (optionnelle) */}
                {project.image && (
                    <div className="w-full h-96 bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 mb-16 shadow-2xl">
                        <img
                            src={project.image}
                            alt={`Aperçu du projet ${project.title}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* LE CONTENU Markdown transformé en HTML */}
                {/* On utilise dangereusementSetInnerHTML, ce qui est OK ici car c'est TON propre contenu trusted */}
                <article className="prose prose-invert prose-emerald prose-lg max-w-none prose-headings:font-bold prose-headings:text-neutral-200 prose-p:text-neutral-300 prose-a:text-emerald-400 hover:prose-a:text-emerald-300">
                    <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
                </article>

            </main>

        </div>
    );
}