import About from './components/About';
import Form from './components/Form';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Projets from './components/Projets';
import Comp from './components/Comp'
import Contact from './components/Contact';
import WebFont from 'webfontloader';


function App() {

  WebFont.load({
    google: {
      families: ['Montserrat:400,700']
    }
  });

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Comp />
      <Form />
      <Projets />
      <Contact /> 
      <Footer />
    </>
  );
}

export default App;
