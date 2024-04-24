import "../assets/styles/Tab.css";
import { Link, useLocation } from 'react-router-dom';


function NavigationTabs() {
     const currentPage = useLocation().pathname;
     return (
          <ul className="nav nav-tabs">
               <li className="nav-item">
                    <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                         About
                    </Link>
               </li>
               <li className="nav-item">
                    <Link to="/Experience" className={currentPage === '/Experience' ? 'nav-link active' : 'nav-link'}>
                         Experience
                    </Link>
               </li>
               <li className="nav-item">
                    <Link to="/Projects" className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}>
                         Projects
                    </Link>
               </li>
               <li className="nav-item">
                    <Link to="/Education" className={currentPage === '/Education' ? 'nav-link active' : 'nav-link'}>
                         Education
                    </Link>
               </li>
               <li className="nav-item">
                    <Link to="/Skills" className={currentPage === '/Skills' ? 'nav-link active' : 'nav-link'}>
                         Skills
                    </Link>
               </li>
               <li className="nav-item">
                    <Link to="/Awards" className={currentPage === '/Awards' ? 'nav-link active' : 'nav-link'}>
                         Awards
                    </Link>
               </li>
               <li className="nav-item">
                    <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                         Contact
                    </Link>
               </li>
          </ul>
     );
}

export default NavigationTabs;