import React from 'react'

function Skills({skill,progress}) {
    return (
        <div className="skillsection">
            <div className="skillcontainer">
                <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress-before">
                            <div style={{width: progress}} className="progress-after">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
