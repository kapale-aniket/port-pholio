import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Oracle Database Intern',
      company: "Triplet's Services",
      period: 'July 2023 – August 2023',
      responsibilities: [
        'Worked with SQL (DDL, DML, DCL)',
        'Implemented joins for efficient data retrieval',
        'Performed query optimization & debugging',
        'Designed relational schemas with normalization'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-company">{exp.company}</span>
                </div>
                <span className="experience-period">{exp.period}</span>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
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

export default Experience;


