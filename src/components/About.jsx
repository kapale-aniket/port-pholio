import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full-Stack Developer with strong expertise in React for frontend 
              development and Python/Django for backend systems. My experience includes working 
              with complex SQL queries, joins, subqueries, and database normalization.
            </p>
            <p>
              During my internship at Oracle Database, I gained hands-on experience with database 
              management, query optimization, and schema design. I'm a curious learner who enjoys 
              tackling challenging problems with an analytical mindset.
            </p>
            <p>
              I thrive in collaborative environments and am always eager to learn new technologies 
              and best practices. My goal is to build efficient, scalable applications that deliver 
              exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


