import './App.css';
import Appbar from './Components/Appbar';
import Filters from './Components/Filters';
import Footer from './Components/Footer';
import FruitsCard from './Components/FruitsCard';
import Specials from './Components/Specials';

function App() {
  return (
    <div >
      <Appbar/>
      <Filters/>
      <FruitsCard />
      <Specials/>
      <Footer />
      
    </div>
  );
}

export default App;
