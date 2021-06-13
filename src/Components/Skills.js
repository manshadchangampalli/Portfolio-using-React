import React from 'react'

function Skills({skill,progress}) {
    return (
        <div className="skillsection">
            <div className="skillcontainer">
                <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
