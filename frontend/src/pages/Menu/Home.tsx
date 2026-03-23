import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MenuSection from "./MenuSection";

function Home() {
  return (
    <div>
      <Navbar />

      <section id="home"
        className="min-h-[240px] flex items-center justify-center text-center border-4"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80') center/cover no-repeat",
        }}
      >
        <div className="px-6 py-12 max-w-xl">
          <h1 className="font-black text-7xl tracking-[10px] mb-5"
            style={{ fontFamily: "'Cinzel', serif" }}>
            MENU
          </h1>
          <p className="text-[#cccccc] text-sm leading-loose">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button located below the menu.
          </p>
        </div>
      </section>

      <div id="menu">
        <MenuSection />
      </div>

      <div id="contact">
        <Footer />
      </div>


    </div>
  );
}

export default Home;