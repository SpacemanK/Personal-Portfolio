import {useRef} from "react";
import { FaBars , FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }
    return ( 
    <header>
        <div className="navbar">

            <Link  to="intro-section" offset={-100} spy={true} smooth={true}  duration={300}>
                <div className="logo">
                </div>
            </Link>
                
    
            
            <nav ref={navRef} className="nav">
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes></FaTimes>
                </button>
                <Link to="About" offset={-60}  smooth={true}  duration={300}  data-aos="fade-down"  data-aos-duration="500" data-aos-once="true" onClick={showNavbar} data-aos-anchor=".main"> <span className="colored">  01. </span> <br/> About</Link>
                <Link to="Education" offset={-60} smooth={true}  duration={300}  data-aos="fade-down"  data-aos-duration="500" data-aos-once="true" data-aos-delay="100" onClick={showNavbar} data-aos-anchor=".navbar"> <span className="colored">  02. </span> <br/> Education</Link>
                <Link to="Experience" offset={-60} smooth={true}  duration={300}  data-aos="fade-down"  data-aos-duration="500" data-aos-once="true" data-aos-delay="200" onClick={showNavbar} data-aos-anchor=".main"> <span className="colored">  03. </span> <br/> Experience</Link>
                <Link to="Projects" offset={-60} smooth={true}  duration={300}  data-aos="fade-down"  data-aos-duration="500" data-aos-once="true" data-aos-delay="300" onClick={showNavbar} data-aos-anchor=".main"> <span className="colored">  04. </span> <br/> Projects</Link>
                <Link to="Contact" offset={-60}  smooth={true}  duration={300}  data-aos="fade-down"  data-aos-duration="500" data-aos-once="true" data-aos-delay="400" onClick={showNavbar} data-aos-anchor=".main"> <span className="colored">  05. </span> <br/> Contact</Link>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars></FaBars>
            </button>
        </div>
    </header>
     );
}
 
export default Navbar;