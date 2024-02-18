// Portfolio.jsx
import Project from './Project'; // Import Project component

function Portfolio() {
  // Sample projects data
  const projects = [
    {
      id: 1,
      name: 'Weather App',
      image: '/public/assets/images/projectImages/weatherApp.png',
      link: 'https://bdaly101.github.io/Weatherpage/',
    },
    {
      id: 2,
      name: 'Calendar Planner',
      image: '/public/assets/images/projectImages/calendarApp.png',
      link: 'https://bdaly101.github.io/Calendar-Planner/',
    },
    // Add more projects here
  ];

  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
