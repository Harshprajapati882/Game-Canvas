import Navbar from "@/MyComponents/Navbar";
import Hero from "@/MyComponents/Hero";

function App() {
  return (
    <div className="w-[100dvw] h-[100dvh] bg-zinc-100 overflow-x-hidden overflow-y-auto relative">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App;