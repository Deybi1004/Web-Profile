import React from 'react';
import { projectsData , projectsNav } from './Data';
import WorkItems from './WorkItems';

function Works() {
  return (
    <div>
        <div className="work__filters">
        {projectsNav.map ((item,index) => {
            return (
                <span className="work__item" key={index} >{item.name}</span>

            )
        })}
    </div>

    <div className="work__container container grid">{projectsData.map((item) => {
        return (
            <WorkItems />
        )
    })}</div>
    </div>
  )
}

export default Works