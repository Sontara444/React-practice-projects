import './App.css';
import Navbar from './components/navigation/Navbar';
import ContactHeader from './components/contactHeader/ContactHeader';
import ContactForm from './components/contactForm/ContactForm';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactHeader />
      <ContactForm />
      
    </div>
  );
}

export default App;
