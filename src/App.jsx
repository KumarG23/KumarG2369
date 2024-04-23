import { Link } from "react-router-dom"
//import { Link } from "App.css"
import { Navigation } from './About'
import myPic from '../src/assets/kumar-profile.png';

const LeftSide = () => {
  return (
    <div id="container" className="d-flex flex column flex-md-row">
      <div className="d-flex justify-content-center col-12">
        <header>
          <div id="left-side" className="sticky-md-top justify-content-center text-center">
            <h1 className="fs-1 fw-bold d-flex justify-content-center" id="info">Neal Sharma</h1>
            <h2 className="mt-3 mb-3 fs-2 fw-bold" id="info">Web Developer</h2>
            <img src={myPic} id="pic"></img>
            <p className="mt-5 fs-5" id="info">I build beautiful and creative web apps</p>
            
            <div id="icon-container" className="d-flex col justify-content-center text-center">
              <ul className="mt-8 d-flex list-unstyled" id="socials">
                <li className="mr-3 mb-2"><a href="https://github.com/KumarG23" target="_blank" id="icon"><i className="fab fa-github"></i></a></li>
                <li className="mr-3 mb-0 ms-2"><a href="https://www.linkedin.com/in/neal-sharma23" target="_blank" id="icon"><i className="fab fa-linkedin"></i></a></li>
                <li className="mr-3 mb-0 ms-2"><a href="https://www.goodreads.com/user/show/124681580-neal-sharma" target="_blank" id="icon"><i className="fab fa-goodreads"></i></a></li>
                <li className="mr-3 mb-0 ms-2"><a href="https://twitter.com/KumarG2369" target="_blank" id="icon"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li className="mr-3 mb-0 ms-2"><a href="https://www.instagram.com/nealkushmarma/" target="_blank" id="icon"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  
  )
}

function App() {
  return (
    <div>
      <Navigation />
    <div className="container-fluid d-flex align-items-center justify-content-center" id="appContainer">
      <LeftSide />
    </div>
    </div>
  )
}


export default App;
export const Left = LeftSide;
