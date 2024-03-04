
function Project({ project }) {
  return (
    <div className="relative group w-full h-64 overflow-hidden rounded-lg">
      <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-lg">
        <span className="opacity-0 group-hover:opacity-100 text-white font-bold">{project.name}</span>
      </a>
    </div>
  );
}

export default Project;


  