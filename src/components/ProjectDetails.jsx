import React from "react";
import "./table.css";
import { PrimeIcons } from "primereact/api";

const ProjectDetails = ({
  project_name,
  output_name,
  last_run,
  transformedData,
}) => {
  return (
    <div className="project-details-container">
      <div className="project-details-left">
        <div className="project-detail">
          <span className="tab-label">
            <i className={`${PrimeIcons.FOLDER} icon`} /> PROJECT NAME:
          </span>
          <span className="value">{project_name}</span>
        </div>
        <div className="project-detail">
          <span className="tab-label">
            <i className={`${PrimeIcons.DATABASE} icon`} /> OUTPUT DATASET NAME:
          </span>
          <span className="value">{output_name}</span>
        </div>
        <div className="project-detail">
          <span className="tab-label">
            <i className={`${PrimeIcons.CALENDAR} icon`} /> LAST RUN:
          </span>
          <span className="value">{last_run}</span>
        </div>
      </div>

      <div className="project-details-right">
        <p style={{ color: "blue" }}>{`Rows :  ${
          transformedData && transformedData.length
        }`}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
