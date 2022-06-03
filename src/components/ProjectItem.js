import React from "react";


function ProjectItem({ name, about, technologies }) {

  const displayTechnologies = technologies.map((technology) => {
    console.log(technology)
    return <span key={technology}>{technology}</span>
  })
  return (
    <div className="project-item">
      {technologies.map((item, i) => { return <span key={i}>{item}</span> })}

      </div>
    </div>
  );
}

export default ProjectItem;
