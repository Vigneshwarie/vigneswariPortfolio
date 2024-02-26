import NavigationTabs from "./NavigationTabs";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Awards from "./pages/Awards";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useState } from "react";  
import "../assets/styles/PortfolioContainer.css";


function PortfolioContainer() { 
     const [currentPage, setCurrentPage] = useState('About');
     const renderPage = () => {
          if (currentPage === 'About') {
               return <About />;
          }
          if (currentPage === 'Experience') {
               return <Experience />;
          }
          if (currentPage === 'Projects') {
               return <Projects />;
          }
          if (currentPage === 'Education') {
               return <Education />;
          }
          if (currentPage === 'Skills') {
               return <Skills />;
          }
          if (currentPage === 'Awards') {
               return <Awards />;
          }
          if (currentPage === 'Contact') {
               return <Contact />;
          }
          
     };

     const handlePageChange = (page) => setCurrentPage(page);
     return (
          <section className="portfolio-container">
               <div>
                    <NavigationTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                    {renderPage()}
               </div>
          </section>
     );
}

export default PortfolioContainer;