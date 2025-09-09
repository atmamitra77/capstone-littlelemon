import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Testimonials from "./components/Testimonials/Testimonials";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Testimonials />
        <Description />
      </main>
      <Footer />
    </>
  );
}

export default App;
