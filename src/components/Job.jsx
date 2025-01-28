import React from "react";

const Job = ({ title, company, period }) => (
  <div className="job">
    <h4>{title}</h4>
    <p>{company}</p>
    <h5>{period}</h5>
  </div>
);

export default Job;