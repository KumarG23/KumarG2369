import { Link } from "react-router-dom"
import { Left } from "./App"
import famPic from '../src/assets/A728013B-A2EA-42AA-BDD6-EF6A63F6761F_1_105_c.jpeg'


const Nav = () => {
  return (
    <nav className="nav d-flex justify-content-center text-center">
              <ul className="fs-5 list-unstyled" id="navlist">
                <li>
                  <Link className="btn mt-3 fw-bold" id="icon" to='/about'>About</Link>
                </li>
                <li className="btn mt-3  fw-bold" id="icon" to='/experience'>Experience</li>
                <li className="btn mt-3 fw-bold" id="icon" to='/projects'>Projects</li>
                <li className="btn mt-3 fw-bold" id="icon" to='/blog'>Blog</li>
              </ul>
            </nav>
  )
}
const RightSide = () => {
  return (
    <div className="d-flex col-12">
      <div id="right-side">
        <h1 id="about">About Me</h1>
        <img src={famPic} id="pic" className="mx-auto d-block mb-5"></img>
        <p id="par">I am an aspiring full stack software engineer. Just a few months ago I decided to take the plunge and learn about software development in a high intensity BootCamp. So far I am loving making cool things on the computer. I love my family above all things. They're my world and the reason I am working through this BootCamp. I love soccer, I have played all my life and have also done some coaching. I can't get enough. I also love cats, I have four of them. I have a saying that my father has told me all my life: Do what you love and the money will come. I hope this BootCamp will allow me to fall more in love with coding.
</p>
      </div>
    </div>
  )
}
function About() {
  return (
    <div className="p-5">
      <Nav className="d-flex"/>
      <Link style={{color: "brown"}} to='/'>{'Home'}</Link>
      <RightSide />

      

    </div>
  )
}


export default About;
export const Navigation = Nav;