import './App.css';
import Navbar from './components/navigation/Navbar';
import ContactHeader from './components/contactHeader/ContactHeader';
import ContactForm from './components/contactForm/ContactForm';
import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactHeader />
      <ContactForm />
      <Button />
    </div>
  );
}

export default App;
