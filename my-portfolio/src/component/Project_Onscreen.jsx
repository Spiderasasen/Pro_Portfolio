import "../styles/Onscreen.css";
import { useState } from "react";

function ProjectOnscreen({ projects, filterType, languageFilter }) {
    const [selectedProject, setSelectedProject] = useState(null);

    // FILTER LOGIC
    let filteredProjects = projects;

    if (filterType && filterType !== "Language") {
        filteredProjects = filteredProjects.filter(
            p => p.Type_of_Project === filterType
        );
    }

    if (filterType === "Language" && languageFilter) {
        filteredProjects = filteredProjects.filter(
            p => p.programming_langagues.includes(languageFilter)
        );
    }

    // MODAL VIEW
    if (selectedProject) {
        return (
            <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={() => setSelectedProject(null)}>✕</button>

                    <h2>{selectedProject.name}</h2>
                    <p><em>{selectedProject.Type_of_Project} project</em></p>
                    <p><em>Language used: {selectedProject.programming_langagues}</em></p>
                    <p>{selectedProject.Detailed_summary}</p>

                    <button onClick={() => window.location.href = selectedProject.Project_link}>
                        See the Code
                    </button>
                </div>
            </div>
        );
    }

    // LIST VIEW
    return (
        <div className="project-list">
            {filteredProjects.map((item) => (
                <div className="project-card" key={item.id} onClick={() => setSelectedProject(item)}>
                    <h3>{item.name}</h3>
                    <div className="project-meta">
                        <em>{item.Type_of_Project} project in {item.programming_langagues}</em>
                    </div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProjectOnscreen;
