import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import NavigationTabs from './components/NavigationTabs';


function App() {
     return (
          <div>
               <Header />
               <NavigationTabs />
               <Outlet />
               <Footer />
          </div>
     );
}

export default App;
