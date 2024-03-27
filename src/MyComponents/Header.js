import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, searchBar, todos, SearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false); // Define darkMode state and its setter function

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const textColorClass = darkMode ? 'text-light' : 'text-dark';
  const buttonColorClass = darkMode ? 'btn-light text-dark' : 'btn-primary text-light';

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${textColorClass}`} href="#">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active ${textColorClass}`} aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link active ${textColorClass}`} aria-current="page" href="#">About</a>
            </li>
          </ul>
          {searchBar &&
            <form className="d-flex position-relative" role="search">
              <input
                className={`form-control me-2 ${textColorClass}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ borderRadius: '10px', height: '40px' }}
              />
              {searchQuery && (
                <div className="position-absolute w-100 mt-1" style={{ paddingTop:'40px',zIndex: 999 }}>
                  <div className="card">
                    <div className="card-body bg-white">
                      <SearchResults todos={filteredTodos} />
                    </div>
                  </div>
                </div>
              )}
            </form>
          }
          <button className={`btn ms-2 ${buttonColorClass}`} onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "Your title",
  searchBar: true
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchBar: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired // Ensure setDarkMode prop is provided
};

export default Header;
