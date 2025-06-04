// Import all components from the components index.ts file
import { Contact, Features, Footer, Header, Hero } from "./components";

function App() {
  return (
    <div className="landing-page-container">
      <Header />
      <Hero />
      <Features />
      {/* <About /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
