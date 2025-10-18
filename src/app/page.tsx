import Image from "next/image";
import NavBar from "@/components/Navbar";
import { Floatingdock } from "@/components/FloatingDock";
import Profile from "@/components/Profile";
import AboutMe from "@/components/AboutMe";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-6">
      <NavBar/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Profile />
        <AboutMe />
      </main>
      <footer>
        <Floatingdock />
      </footer>
    </div>
  );
}
