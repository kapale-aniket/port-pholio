import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['Python', 'Django', 'CRUD', 'Authentication', 'File Handling']
    },
    {
      title: 'Database',
      skills: ['SQL', 'Joins', 'Subqueries', 'Optimization', 'Normalization']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


