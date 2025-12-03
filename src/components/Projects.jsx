import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project Report Submission System',
      tech: 'Django, MySQL',
      description: 'A Django-based platform for report submission with authentication, file uploads, evaluator feedback, grading, and batch/department filtering.',
      features: ['User Authentication', 'File Upload System', 'Evaluator Feedback', 'Grading System', 'Batch/Department Filtering']
    },
    {
      title: 'Self-Spot',
      tech: 'React, CSS',
      description: 'A responsive UI with reusable components, dynamic elements, and optimized performance.',
      features: ['Responsive Design', 'Reusable Components', 'Dynamic Elements', 'Performance Optimized']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech">
                  {project.tech.split(', ').map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


