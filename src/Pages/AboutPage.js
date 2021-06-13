import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import Skills from '../Components/Skills'

function AboutPage() {
    return (
        <div className="aboutpage">
           <Title title="About Me" span="About Me" />
           <ImageSection/>
           <Title title="My Skills" span="My Skills" />
           <Skills skill= "Javascript" progress= '70%' />
        </div>
    )
}

export default AboutPage
