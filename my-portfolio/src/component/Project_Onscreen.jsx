import projects from "../data/projects.json";
import "../styles/Onscreen.css"

function ProjectOnscreen() {
    return (
        <div className="project-list">
            {projects.map((item) => (
                <div className="project-card" key={item.id}>
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