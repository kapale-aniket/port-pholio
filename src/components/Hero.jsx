import '../styles/Hero.css';
import redImage from '../assets/red.jpg';

const Hero = () => {
  const handleDownloadResume = () => {
    // Resume file is stored in the public folder
    // Using import.meta.env.BASE_URL to handle base path correctly
    const baseUrl = import.meta.env.BASE_URL;
    const link = document.createElement('a');
    link.href = `${baseUrl}Aniket_Arun_Kapale.pdf`;
    link.download = 'Aniket_Arun_Kapale_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Aniket Arun Kapale</span>
            </h1>
            <h2 className="hero-role">Full-Stack Developer</h2>
            <p className="hero-tagline">
              Building modern web applications with React frontend and Django backend. 
              Passionate about creating efficient, scalable solutions.
            </p>
            <div className="hero-tech">
              <span>React</span>
              <span>|</span>
              <span>Django</span>
              <span>|</span>
              <span>SQL</span>
            </div>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleHireMe}>
                Hire Me
              </button>
              <button className="btn btn-secondary" onClick={handleDownloadResume}>
                Download Resume
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <img src={redImage} alt="Aniket Arun Kapale" className="hero-photo" />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

