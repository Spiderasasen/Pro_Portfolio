import projects from "../data/projects.json";

function ProjectOnscreen() {
    return(
      <div>
          {projects.map((item) => (
              <div key={item.id}>
                  <h3>{item.name}</h3>
                  {/*having both the type of project and the project langauge next to each other*/}
                  <div>
                      <p><em>{item.Type_of_Project} in {item.programming_langagues}</em></p>
                  </div>
                  <p>{item.description}</p>
              </div>
          ))}
      </div>
    );
}
export default ProjectOnscreen;