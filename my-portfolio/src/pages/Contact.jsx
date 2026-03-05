import "../styles/home.css"
import {useNavigate} from "react-router-dom";

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
        </div>
    );
}
export default Contact;