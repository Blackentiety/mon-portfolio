import Navbar from "@/components/Navbar";
import Presentation from "@/components/Presentation";

export default function Home() {
  return (
      <div className="min-h-screen bg-neutral-950 container mx-auto px-6">
          <Navbar />
          <main>
              <Presentation />
          </main>
      </div>
  );
}