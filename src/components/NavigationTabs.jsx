import "../assets/styles/Tab.css";

function NavigationTabs({ currentPage, handlePageChange }) {
     return (
          <ul className="nav nav-tabs">
               <li className="nav-item">
                    <a href="#about"
                         onClick={() => handlePageChange('About')}
                         className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} >About</a>
               </li>
               <li className="nav-item">
                    <a href="#experience"
                         onClick={() => handlePageChange('Experience')}
                         className={currentPage === 'Experience' ? 'nav-link active' : 'nav-link'} >Experience</a>
               </li>
               <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
               </li>
               <li className="nav-item">
                    <a href="#education"
                         onClick={() => handlePageChange('Education')}
                         className={currentPage === 'Education' ? 'nav-link active' : 'nav-link'} >Education</a>
               </li>
               <li className="nav-item">
                    <a href="#skills"
                         onClick={() => handlePageChange('Skills')}
                         className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'} >Skills</a>
               </li>
               <li className="nav-item">
                    <a href="#awards"
                         onClick={() => handlePageChange('Awards')}
                         className={currentPage === 'Awards' ? 'nav-link active' : 'nav-link'} >Awards</a>
               </li>
               <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
               </li>
               <li className="nav-item">
                    <a className="nav-link" href="#resume">Resume</a>
               </li>
          </ul>
     );
}

export default NavigationTabs;