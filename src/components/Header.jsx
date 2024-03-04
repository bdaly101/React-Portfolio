import { useState } from 'react';
import Navigation from './Navigation';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import ContactForm from './pages/ContactForm';
function Header() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <ContactForm />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='header'>
        <h1 className="page-head">Brendan Daly</h1>
        <Navigation 
            currentPage={currentPage} 
            handlePageChange={handlePageChange}
        />
        <main className="mx-3">{renderPage()}</main>
        
    </div>
    
);
}

export default Header;
