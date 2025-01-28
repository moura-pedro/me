import React from "react";
import Job from "../components/Job";
import "./Resume.css";

const Resume = () => (
  <div className="timeline-container">
    <div className="timeline">
      <div className="timeline-line"></div>
      <div className="timeline-items">
        {[
          { title: "software engineering intern", company: "amazon.com", period: "2022" },
          { title: "software engineering intern", company: "amazon web services (aws)", period: "2023" },
          { title: "generative ai engineer", company: "reality ai labs", period: "2024" },
          { title: "undergraduate researcher", company: "biological computing (biclab) lab", period: "2025" },
          { title: "undergraduate researcher", company: "neural transmissions (nets) lab", period: "2025" },
        ].map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="job-title">{job.title}</div>
            <div className="company-year">
              <span className="company">{job.company}</span>
              <span className="year">{job.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Resume;
