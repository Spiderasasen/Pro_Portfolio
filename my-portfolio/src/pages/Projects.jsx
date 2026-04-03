import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import Projects_Onscreen from "../component/Project_Onscreen.jsx";
import {useState, useEffect, useMemo} from "react";
import "../styles/loading.css"

function Projects() {
    const navigate = useNavigate();

    const [projects, setProjects] = useState([]);
    const [filterType, setFilterType] = useState(null);
    const [languageFilter, setLanguageFilter] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch Google Sheet API once
    useEffect(() => {
        setLoading(true);

        fetch("https://script.google.com/macros/s/AKfycby0JSXtIcGxNxBtGpCXFQZOBzHoOZbhFc2TJeouMYrwz-gtPIL6Cm1JuQy5K_n_DFnx6g/exec")
            .then(res => res.json())
            .then(data => {
                console.log("API Data:", data);
                setProjects(data);
                setLoading(false);
            })
            .catch(err => console.error("API Error:", err));
    }, []);

    //getting all the langagues from the google sheet
    const allLanguages = [... new Set(
        projects.flatMap(p => p.programming_langagues.split(",").map(l => l.trim()))
    )]

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
                    {allLanguages.map(lang => (
                        <button key={lang} onClick={() => setLanguageFilter(lang)}>
                            {lang}
                        </button>
                    ))}
                    <button onClick={() => setLanguageFilter(null)}>All Languages</button>
                </div>
            )}

            {loading ? (
                <div className="loader"></div>
            ) : (
                <Projects_Onscreen
                    projects={projects}
                    filterType={filterType}
                    languageFilter={languageFilter}
                />
            )}


            <Projects_Onscreen
                projects={projects}
                filterType={filterType}
                languageFilter={languageFilter}
            />
        </div>
    );
}

export default Projects;
