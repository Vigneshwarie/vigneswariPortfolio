import NavigationTabs from "./NavigationTabs";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import { useState } from "react";  


function PortfolioContainer() { 
     const [currentPage, setCurrentPage] = useState('About');
     const renderPage = () => {
          if (currentPage === 'About') {
               return <About />;
          }
          if (currentPage === 'Experience') {
               return <Experience />;
          }
           if (currentPage === 'Education') {
               return <Education />;
          }
     };

     const handlePageChange = (page) => setCurrentPage(page);
     return (
          <div>
               <NavigationTabs currentPage={currentPage} handlePageChange={handlePageChange} />
               {renderPage()}
          </div>
     );
}

export default PortfolioContainer;