
function Project({ project }) {
    return (
      <div className="project">
        <img src={project.image} alt={project.name} className="project-image" />
        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
          <span className="project-title">{project.name}</span>
        </a>
      </div>
    );
  }
  
  export default Project;
  