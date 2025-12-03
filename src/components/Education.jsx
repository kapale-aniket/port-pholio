import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech CSE',
      period: '2022–2025',
      institution: 'NMCE',
      percentage: '7.30 CGPA'
    },
    {
      degree: 'Diploma CE',
      period: '2017–2022',
      institution: 'VVIT',
      percentage: '81.71%'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-period">{edu.period}</p>
              <div className="education-percentage">
                <span>{edu.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;


