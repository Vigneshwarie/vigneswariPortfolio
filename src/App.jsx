import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
     return (
          <div>
               <Header />
               <Tabs />
               <Footer />
          </div>
     );
}

export default App;
