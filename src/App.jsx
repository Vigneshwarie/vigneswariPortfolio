import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationTabs from './components/NavigationTabs';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
     return (
          <div>
               <Header />
               <NavigationTabs />
               <Footer />
          </div>
     );
}

export default App;
