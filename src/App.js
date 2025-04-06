import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import AboutPage from './pages/aboutpage/AboutPage';
import Contactpage from './pages/contactpage/Contactpage';
import ShopPage from './pages/shoppage/ShopPage';



function App() {
  return (
    <div className="App">
      <main className="mainClassNav">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <Link className="navbar-brand" to="homepage">Navbar</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="homepage">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="aboutpage">About us</Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="shoppage"
                  role="button"
                  aria-expanded="false">
                  Shop page
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contactpage">Contact Us</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </main>




      <Routes>
        <Route path="homepage" element={<HomePage />} />
        <Route path="aboutpage" element={<AboutPage />} />
        <Route path="contactpage" element={<Contactpage />} />
        <Route path="shoppage" element={<ShopPage />} />

      </Routes>


    </div>
  );
}

export default App;
