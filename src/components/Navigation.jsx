// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item shiny-text">
          <a
            href="#aboutMe"
            onClick={() => handlePageChange('AboutMe')}
            
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About me
          </a>
        </li>
        <li className="nav-item shiny-text">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}  
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item ">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    );
  }
  
  export default Navigation;
  