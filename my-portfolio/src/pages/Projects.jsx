import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import Projects_Onscreen from "../component/Project_Onscreen.jsx";
import { useState } from "react";

function Projects() {
    const navigate = useNavigate();

    const [filterType, setFilterType] = useState(null);
    const [languageFilter, setLanguageFilter] = useState(null);

    return (
        <div>
            <header className="nav">
                <nav className="links">
                    <button onClick={() => navigate("/")}>Home</button>
                    <button>Projects</button>
                    <button onClick={() => navigate("/Contact")}>Contact Me</button>
                </nav>
            </header>

            <section className="hero">
                <h1>Projects</h1>
            </section>

            {/* Filter Buttons */}
            <div className="filter-bar">
                <button onClick={() => { setFilterType("Personal"); setLanguageFilter(null); }}>Personal</button>
                <button onClick={() => { setFilterType("School Work"); setLanguageFilter(null); }}>School Work</button>
                <button onClick={() => { setFilterType("Work"); setLanguageFilter(null); }}>Work</button>
                <button onClick={() => setFilterType("Language")}>Language</button>
            </div>

            {/* Language Sub-Filter */}
            {filterType === "Language" && (
                <div className="sub-filter">
                    <button onClick={() => setLanguageFilter("Java")}>Java</button>
                    <button onClick={() => setLanguageFilter("Python")}>Python</button>
                    <button onClick={() => setLanguageFilter("Web Dev")}>Web Dev</button>
                    <button onClick={() => setLanguageFilter("React")}>React</button>
                    <button onClick={() => setLanguageFilter("SQL")}>SQL</button>
                    <button onClick={() => setLanguageFilter("C")}>C</button>
                    <button onClick={() => setLanguageFilter(null)}>All Languages</button>
                </div>
            )}

            <Projects_Onscreen
                filterType={filterType}
                languageFilter={languageFilter}
            />
        </div>
    );
}

export default Projects;
