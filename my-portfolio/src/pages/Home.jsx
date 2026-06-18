import "../styles/home.css"
import { useNavigate } from "react-router-dom";
import Resume from "../assets/Diego-Diaz_resume.pdf";

function Home(){
    const navigate = useNavigate();

    return (
        <div>
            <header className="nav">
                <nav className="links">
                    <button onClick={() => navigate("/")}>Home</button>
                    <button onClick={() => navigate("/Projects")}>Projects</button>
                    <button onClick={() => navigate("/Contact")}>Contact Me</button>
                </nav>
            </header>

            <section className="hero">
                <h1>Hello, I'm Diego.</h1>
                <p>I build things for the web.</p>
            </section>

            <section className="about">
                <h2>About Me</h2>
                <p>I’m Diego — a full‑stack developer and computer science student who enjoys building clean, reliable systems across the entire stack. I work with React, JavaScript, Python, Java, C, and Go, and I’m comfortable moving between frontend interfaces, backend architecture, and data‑driven features.
                    <br/><br/>
                    I have a strong foundation in SQL and database design, and I enjoy the analytical side of engineering — structuring data, optimizing queries, and building workflows that make applications fast, predictable, and easy to maintain.
                    <br/><br/>
                    My strengths are in backend logic, system design, and turning complex problems into simple, usable tools. At the same time, I enjoy frontend work and care about building interfaces that feel intuitive and consistent.
                    <br/><br/>
                    I’m always learning, experimenting, and building projects that reflect my growth as an engineer. More than anything, I like creating practical solutions that help people and make technology feel more thoughtful and human.</p>
            </section>

            <section className="resume">
                <h2>Resume</h2>
                <a id="resume-link" href={Resume} download="Diego-Diaz_resume.pdf">
                    Download my resume here.
                </a>
            </section>
        </div>
    );
}
export default Home;