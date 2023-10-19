import "./App.css";
import Navbar from "./components/navigation/Navbar";
import ContactHeader from "./components/contactHeader/ContactHeader";
import ContactForm from "./components/contactForm/ContactForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
