// Portfolio.jsx
import Project from './Project'; // Import Project component

function Portfolio() {
  
  const projects = [
    {
      id: 1,
      name: 'Weather App',
      image: '/assets/images/projectImages/weatherApp.png',
      link: 'https://bdaly101.github.io/Weatherpage/',
    },
    {
      id: 2,
      name: 'Calendar Planner',
      image: '/assets/images/projectImages/calendarApp.png',
      link: 'https://bdaly101.github.io/Calendar-Planner/',
    },
    {
      id: 3,
      name: 'Coming Soon!',
      image: '/assets/images/projectImages/comingSoon.png',
      link: '/src/components/pages/Error.html',
    },
    // Add more projects here
  ];

  return (
    <div className="portfolio">
      <h2 className="text-2xl font-bold my-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
  
}

export default Portfolio;
