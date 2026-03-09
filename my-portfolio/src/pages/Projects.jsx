import { useNavigate } from "react-router-dom";
import "../styles/home.css"

function Projects() {
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
    )
}
export default Projects;