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


            {/*listing out all the projects*/}
            <section className="hero">
                <h1>Projects</h1>
            </section>

            {/*filter for all the projects*/}
            <div>
                <button>Personal</button>
                <button>School Work</button>
                <button>Work</button>
                <button>Language</button>
            </div>
        </div>
    )
}
export default Projects;