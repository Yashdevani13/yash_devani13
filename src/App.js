import './App.css';
import ContactFrom from './componets/ContactFrom/ContactFrom'
import Contactheader from './componets/ContactHeader/Contactheader';
import Navigation from './componets/navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <main className='main_container'>
        <Contactheader />
        <ContactFrom />
      </main>
    </>
  );
}

export default App;
