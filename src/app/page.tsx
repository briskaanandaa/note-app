import CreateArea from "@/components/ui/CreateArea";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 h-100vh">
      <Navbar/>
      <div className="w-full my-4">
      <CreateArea/>
      </div>
      <Footer/>

    </main>
  );
}
