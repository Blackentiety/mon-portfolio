export default function Navbar() {
    return (
        <nav className="w-full mb-20 pt-10">
            <div className="flex justify-center gap-10">
                <a href="#profil" className="p-4 w-40 text-center bg-neutral-800 border border-neutral-700 rounded-lg font-mono text-neutral-300 hover:bg-neutral-700 transition">
                    Mon Profil
                </a>
                <a href="#passions" className="p-4 w-40 text-center bg-neutral-800 border border-neutral-700 rounded-lg font-mono text-neutral-300 hover:bg-neutral-700 transition">
                    Mes Passions
                </a>
                <a href="#projets" className="p-4 w-40 text-center bg-neutral-800 border border-neutral-700 rounded-lg font-mono text-neutral-300 hover:bg-neutral-700 transition">
                    Mes Projets
                </a>
            </div>
        </nav>
    );
}