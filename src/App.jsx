import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
     return (
          <div>
               <Header />
               <PortfolioContainer />
               <Footer />
          </div>
     );
}

export default App;
