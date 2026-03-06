import "../styles/home.css";
import {useNavigate} from "react-router-dom";
import contact from "../data/contact.json";

function Contact(){
    const navigate = useNavigate();

    return (
        <div>
            <header className="nav">
                <nav className="links">
                    <button onClick={() => navigate("/")}>Home</button>
                    <button>Projects</button>
                    <button onClick={() => navigate("/Contact")}>Contact Me</button>
                </nav>
            </header>

            <div className="hero">
                <h1>Contact Me</h1>
                <p>
                    Want to work with me on a project?<br/>
                    Please contact me here.
                </p>
            </div>
        </div>
    );
}
export default Contact;