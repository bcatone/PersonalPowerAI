import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2 className="how-it-works-header">How It Works:</h2>
      <h3 className="how-it-works-header">Your Mentorship Journey</h3>
      <div className="how-it-works-container">
        <Step
          number={1}
          title="Registration and Profile Setup"
          description={['Register on our platform and complete your profile.']}
        />
        <Step
          number={2}
          title="AI-Powered Mentorship Matching"
          description={[
            'Play our AI game to find mentors or mentees with similar interests.',
            'Connect with like-minded people'
          ]}
        />
        <Step
          number={3}
          title="Dashboard Features"
          description={[
            'Access your personalized dashboard.',
            'Chat with mentors, find new ones, and explore soft skills challenges.'
          ]}
        />
        <Step
          number={4}
          title="Engage in Meaningful Social Good Projects"
          description={[
            'Get involved in projects for positive social impact.',
            'Form learning communities with other mentees.'
          ]}
        />
      </div>
    </section>
  );
};

const Step = ({ number, title, description }) => {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <div className="step-details">
        <h3>{title}</h3>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
